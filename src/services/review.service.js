import { prisma } from '../lib/prisma.js'

export async function calculateHotelRating(hotelId) {
    try {
        const aggregate = await prisma.reviews.aggregate({
            where: { hotelId },
            _avg: { rating: true },
            _count: { rating: true },
        })

        const reviewCount = aggregate._count.rating
        const averageRating =
            reviewCount > 0
                ? parseFloat(aggregate._avg.rating.toFixed(1))
                : 0

        await prisma.hotel.update({
            where: { id: hotelId },
            data: { averageRating, reviewCount },
        })

        return { averageRating, reviewCount }
    } catch (error) {
        console.log('error in calculateHotelRating', error)
        throw error
    }
}

export async function calculateAllHotelsRatings() {
    try {
        const hotels = await prisma.hotel.findMany({
            select: { id: true }
        })

        console.log(`🔄 Starting recalculation of ratings for ${hotels.length} hotels...`)

        for (const hotel of hotels) {
            await calculateHotelRating(hotel.id)
        }

        console.log('✅ Recalculated all hotel ratings successfully.')
    } catch (error) {
        console.error('error in calculateAllHotelsRatings', error)
        throw error
    }
}



export async function createReview(reviewData) {
        try {
        const review = await prisma.reviews.create({
            data: reviewData
        })

        // Keep Hotel.averageRating & reviewCount up-to-date
        await calculateHotelRating(reviewData.hotelId)

        return review
    } catch (error) {
        console.log('error in createReview', error)
        throw error
    }
}

export async function getAllReviews() {
    try {
        return await prisma.reviews.findMany({
            include: {
                user: true,
            }
        })
    } catch (error) {
        console.log('error in getAllReviews', error)
        throw error
    }

}

export async function getAllMyReviews(userid) {
    try {
        return await prisma.reviews.findMany({
            where: {userId:userid} ,
            orderBy: { id: 'desc'},
            include: {
                user: true,
                room: true,
                hotel: true
            }
        })
    } catch (error) {
        console.log('error in getAllReviews', error)
        throw error
    }

}

export async function getReviewByHotel(hotelId) {
    try {
        return await prisma.reviews.findMany({
            where: {
                hotelId: hotelId
            },
            include: {
                hotel: true,
                user: true
            }
        })

    } catch (error) {
        console.log('error in getReviewByHotel', error)
        throw error
    }
}

export async function getReviewById(reviewId) {
    try {
        return await prisma.reviews.findUnique({
            where: {
                id: reviewId
            },
            include: {
                hotel: {
                    include: {
                        hotelImg: true 
                    }
                },
                room: true,
                user: true
            }
        })

    } catch (error) {
        console.log('error in getReviewById', error)
        throw error
    }
}

export async function DeleteReview(reviewId) {
    try {
        // Fetch hotelId before deleting so we can recalculate afterwards
        const existing = await prisma.reviews.findUnique({
            where: { id: reviewId },
            select: { hotelId: true },
        })

        const deleted = await prisma.reviews.delete({
            where: { id: reviewId }
        })

        // Keep Hotel.averageRating & reviewCount up-to-date
        if (existing?.hotelId) {
            await calculateHotelRating(existing.hotelId)
        }

        return deleted
    } catch (error) {
        console.log('error in DeleteReview', error)
        throw error
    }
}