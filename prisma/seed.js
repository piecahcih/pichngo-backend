import { prisma } from '../src/lib/prisma.js'
import { calculateAllHotelsRatings } from '../src/services/review.service.js'
import bcrypt from 'bcrypt'
import { hotelImg } from '../data/hotelImg.js'
import { hotelData } from '../data/hoteldata.js'
import { roomData } from '../data/room.js'
import { bookingStatus } from '../src/generated/prisma/index.js'
import { discountData } from '../data/discountData.js'
import { reviewData } from '../data/reviewData.js'
import { bookingData } from '../data/bookingData.js'


const hashedPassword = () => bcrypt.hashSync('123456', 8)

const userData = [
    {
        name: 'ADMINPeach', email: 'ADMINpeach@gmail.com', password: hashedPassword(), role: 'ADMIN',
        profileImg: 'https://i.pinimg.com/564x/2b/bc/af/2bbcaf8b5d4409e227782d4fe4484b59.jpg'
    },
    {
        name: 'Peach', email: 'peach@gmail.com', password: hashedPassword(), role: 'USER',
        profileImg: 'https://i.pinimg.com/736x/82/b5/59/82b5591589b5b545726a31fd54728fd4.jpg'
    },
    {
        name: 'PeachPatchara', email: 'peachpatch@gmail.com', password: hashedPassword(), role: 'USER',
        profileImg: 'https://res.cloudinary.com/piecahcih/image/upload/v1774238072/y9x0bjp2guf5q7ds8lmb.jpg'
    },
    {
        name: 'NamfaWarin', email: 'namfa@gmail.com', password: hashedPassword(), role: 'USER',
        profileImg: 'https://res.cloudinary.com/piecahcih/image/upload/v1777047843/Screenshot_2026-04-24_232335_faz7c3.png'
    },
    {
        name: 'KaoFah', email: 'kaofah@gmail.com', password: hashedPassword(), role: 'USER',
        profileImg: 'https://res.cloudinary.com/hera/image/upload/v1776334064/luna_t3jn7k.jpg'
    },
    {
        name: 'MintraPhon', email: 'mintra@gmail.com', password: hashedPassword(), role: 'USER',
    },
    {
        name: 'TanyaRose', email: 'tanya@gmail.com', password: hashedPassword(), role: 'USER',
    },
    {
        name: 'SuwijitK', email: 'suwijit@gmail.com', password: hashedPassword(), role: 'USER',
        profileImg: 'https://res.cloudinary.com/hera/image/upload/v1776334063/totoro_voeq5x.jpg'
    },
    {
        name: 'LeoNapat', email: 'leonapat@gmail.com', password: hashedPassword(), role: 'USER',
    },
    {
        name: 'ChutimaTee', email: 'chutima@gmail.com', password: hashedPassword(), role: 'USER',
        profileImg: 'https://res.cloudinary.com/hera/image/upload/v1776334302/deena_f0wy53.jpg'
    }
]

const travelerData = [
    { id: 1, firstName: 'Pichayapa', lastName: 'Thaisedhawatkul', userId: 3 },
    { id: 2, firstName: 'Peach', lastName: 'Patchara', userId: 3 }
]


const guestbkData = [
    {
        firstName: "Pichayapa",
        lastName: "Thaisedhawatkul",
        bookingId: 1
    },
    {
        firstName: "Peach",
        lastName: "Patchara",
        bookingId: 1
    },
    {
        firstName: "Pichayapa",
        lastName: "Thaisedhawatkul",
        bookingId: 2
    },
    {
        firstName: "Peach",
        lastName: "Patchara",
        bookingId: 2
    },
    {
        firstName: "Pichayapa",
        lastName: "Thaisedhawatkul",
        bookingId: 3
    },
    {
        firstName: "Peach",
        lastName: "Patch",
        bookingId: 3
    },

]

const paymentData = [
    {
        paymentMethod: "QR_PAYMENT",
        accountName: "Pichayapa Thaisedhawatkul",
        amount: 24000,
        paymentDate: new Date("2026-03-29T15:35:17Z"),
        paymentRefNo: "REF_123456789",
        paymentStatus: "PAID",
        bookingId: 2
    },
    {
        paymentMethod: "CREDIT_CARD",
        accountName: "Pichayapa Thaisedhawatkul",
        amount: 31000,
        paymentDate: new Date("2026-03-29T15:35:17Z"),
        paymentRefNo: "REF_123456789",
        paymentStatus: "PAID",
        bookingId: 3
    }
]

async function main() {
    console.log('Clear Data...')

    const tableNames = [
        "_DiscountToHotel",
        "User",
        "TravelerInfo",
        "Hotel",
        "HotelImg",
        "Room",
        "Like",
        "Booking",
        "BookingGuest",
        "Discount",
        "Payment",
        "Reviews",
        "Rewards"
    ];

    try {
        await prisma.$transaction(async (tx) => {
            await tx.$executeRawUnsafe("SET FOREIGN_KEY_CHECKS = 0;");
            for (const name of tableNames) {
                try {
                    await tx.$executeRawUnsafe(`DELETE FROM \`${name}\`;`);
                    try {
                        await tx.$executeRawUnsafe(`ALTER TABLE \`${name}\` AUTO_INCREMENT = 1;`);
                    } catch (autoIncrementErr) {
                        // Some tables may not have AUTO_INCREMENT, ignore error.
                    }
                } catch (err) {
                    console.warn(`⚠️ Warning: Could not clear table ${name}:`, err.message);
                }
            }
            await tx.$executeRawUnsafe("SET FOREIGN_KEY_CHECKS = 1;");
        });
    } catch (err) {
        console.error("❌ Error during clear data phase:", err.message);
    }

    console.log(`Start seeding...`)
    const createdUsers = await prisma.user.createMany({
        data: userData,
        skipDuplicates: true
    })
    const createdTravelers = await prisma.travelerInfo.createMany({
        data: travelerData,
        skipDuplicates: true
    })
    const createdHotelImg = await prisma.hotelImg.createMany({
        data: hotelImg,
        skipDuplicates: true
    })
    const createdHotels = await prisma.hotel.createMany({
        data: hotelData,
        skipDuplicates: true
    })
    const createdRooms = await prisma.room.createMany({
        data: roomData,
        skipDuplicates: true
    })
    const createdDiscounts = []
    for (const promo of discountData) {
        const savedDiscount = await prisma.discount.create({
            data: promo
        });
        createdDiscounts.push(savedDiscount);
    }
    const createdBooking = await prisma.booking.createMany({
        data: bookingData,
        skipDuplicates: true
    })
    const createdBookingGuest = await prisma.bookingGuest.createMany({
        data: guestbkData,
        skipDuplicates: true
    })
    const createdPayment = await prisma.payment.createMany({
        data: paymentData,
        skipDuplicates: true
    })
    const createdReviews = await prisma.reviews.createMany({
        data: reviewData,
        skipDuplicates: true
    })


    console.log(`Created : ${createdUsers.count} users`)
    console.log(`Created : ${createdTravelers.count} travelers`)
    console.log(`Created : ${createdHotels.count} hotels`)
    console.log(`Created : ${createdHotelImg.count} hotelImgs`)
    console.log(`Created : ${createdRooms.count} rooms`)
    console.log(`Created : ${createdDiscounts.length} discounts`)
    console.log(`Created : ${createdBooking.count} bookings`)
    console.log(`Created : ${createdBookingGuest.count} booking guests`)
    console.log(`Created : ${createdPayment.count} payments`)
    console.log(`Created : ${createdReviews.count} reviews`)

    // Recalculate ratings and review counts for seeded hotels
    await calculateAllHotelsRatings()
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
})