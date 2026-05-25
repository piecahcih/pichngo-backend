import { prisma } from '../lib/prisma.js'

// This function is for PREVIEWING rewards before a booking is made
export async function calculateBookingRewards(finalPrice) {
    try {
        // 1 Reward Point for every 1000 THB spent (finalPrice)
        const points = Math.floor(Number(finalPrice) / 1000);

        return {
            rewardPoints: points,
            rewardStatus: 'PENDING'
        };
    } catch (error) {
        console.error('Error in calculateBookingRewards preview:', error);
        throw error;
    }
}

// This function is for SAVING rewards when a booking is actually created/confirmed
export async function saveBookingRewards(bookingId) {
    try {
        const booking = await prisma.booking.findUnique({
            where: { id: bookingId }
        });

        if (!booking) throw new Error('Booking not found');

        const points = Math.floor(Number(booking.finalPrice) / 1000);

        const reward = await prisma.rewards.upsert({
            where: { bookingId: bookingId },
            update: {
                rewardPoints: points,
                rewardStatus: booking.bookingStatus === 'CANCELLED' ? 'CANCELLED' : 'PENDING'
            },
            create: {
                userId: booking.userId,
                bookingId: bookingId,
                rewardPoints: points,
                rewardStatus: 'PENDING'
            }
        });

        return reward;
    } catch (error) {
        console.error('Error in saveBookingRewards:', error);
        throw error;
    }
}

export async function getUserRewardsAndTier(userId) {
    try {
        const today = new Date();

        // 1. SELF-HEALING SYNC: Find confirmed bookings that are missing rewards
        const bookingsWithoutRewards = await prisma.booking.findMany({
            where: {
                userId: userId,
                bookingStatus: 'CONFIRMED',
                rewards: { none: {} }
            }
        });

        // Create missing rewards on the fly
        if (bookingsWithoutRewards.length > 0) {
            for (const booking of bookingsWithoutRewards) {
                const points = Math.floor(Number(booking.finalPrice) / 1000);
                await prisma.rewards.create({
                    data: {
                        userId: userId,
                        bookingId: booking.id,
                        rewardPoints: points,
                        rewardStatus: (new Date(booking.checkOutDate) < today) ? 'AVAILABLE' : 'PENDING'
                    }
                });
            }
        }

        // 2. STATUS SYNC: Update PENDING to AVAILABLE after stay
        await prisma.rewards.updateMany({
            where: {
                userId: userId,
                rewardStatus: 'PENDING',
                booking: {
                    checkOutDate: { lt: today },
                    bookingStatus: 'CONFIRMED'
                }
            },
            data: {
                rewardStatus: 'AVAILABLE'
            }
        });

        // 3. STATUS SYNC: Update rewards to CANCELLED if booking is CANCELLED
        await prisma.rewards.updateMany({
            where: {
                userId: userId,
                rewardStatus: 'PENDING',
                booking: {
                    bookingStatus: 'CANCELLED'
                }
            },
            data: {
                rewardStatus: 'CANCELLED'
            }
        });

        // 4. Summarize Data
        const rewards = await prisma.rewards.findMany({
            where: { userId: userId },
            include: { booking: true }
        });

        const availablePoints = rewards
            .filter(r => r.rewardStatus === 'AVAILABLE')
            .reduce((sum, r) => sum + r.rewardPoints, 0);

        const pendingPoints = rewards
            .filter(r => r.rewardStatus === 'PENDING')
            .reduce((sum, r) => sum + r.rewardPoints, 0);

        const totalPoints = availablePoints + pendingPoints;

        // 5. Calculate Tier Metrics
        const confirmedBookings = await prisma.booking.findMany({
            where: { 
                userId: userId,
                bookingStatus: 'CONFIRMED'
            }
        });

        const totalSpend = confirmedBookings.reduce((sum, b) => sum + Number(b.finalPrice), 0);
        const bookingCount = confirmedBookings.length;

        // 6. Tier Logic
        let tier = 'Bronze';
        if (totalSpend >= 750000 || bookingCount >= 30) tier = 'Diamond';
        else if (totalSpend >= 300000 || bookingCount >= 15) tier = 'Platinum';
        else if (totalSpend >= 100000 || bookingCount >= 5) tier = 'Gold';
        else if (totalSpend >= 30000) tier = 'Silver';

        return {
            availablePoints,
            pendingPoints,
            totalPoints,
            totalSpend,
            bookingCount,
            tier,
            rewards
        };
    } catch (error) {
        console.error('Error in getUserRewardsAndTier:', error);
        throw error;
    }
}
