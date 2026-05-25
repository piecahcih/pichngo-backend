import { prisma } from '../lib/prisma.js'

export async function addBooking(BKdata) {
    try {
        return await prisma.booking.create({
            data: BKdata,
            include: {
                room: {
                    include: {
                        hotel: {
                            include: {
                                hotelImg: true
                            }
                        }
                    }
                }
            },
        })
    } catch (error) {
        console.log('error in addBooking', error)
        throw error
    }
}

export async function checkRoomAvailability(roomId, checkInDateNum, checkOutDateNum, requestedAmount = 1) {
    try {
        const room = await prisma.room.findUnique({
            where: { id: roomId },
            include: {
                bookings: {
                    where: {
                        bookingStatus: { not: "CANCELLED" },
                        AND: [
                            { checkInDate: { lt: checkOutDateNum } },
                            { checkOutDate: { gt: checkInDateNum } },
                        ]
                    }
                }
            }
        })
    } catch (error) {
        console.log('error in checkRoomAvailability', error)
        throw error
    }
}

export async function addBookingGuest(BKGdata, bookingId) {
    const formattedGuests = BKGdata.map((guest) => ({
        bookingId: bookingId,
        firstName: guest.firstName,
        lastName: guest.lastName
    }))

    await prisma.bookingGuest.createMany({
        data: formattedGuests
    })

    return await prisma.bookingGuest.findMany({
        where: { bookingId: bookingId }
    })
}

export async function addPayment(Pdata) {
    try {
        return await prisma.payment.create({ data: Pdata })
    } catch (error) {
        console.log('error in addPayment', error)
        throw error
    }
}


export async function getAllBookingFromThisUser(userId) {
    try {
        return await prisma.booking.findMany({
            where: { userId: userId },
            include: {
                room: {
                    include: {
                        hotel: {
                            include: {
                                hotelImg: true
                            }
                        }
                    }
                },
                bookingGuests: true
            }
        })

    } catch (error) {
        console.log('error in getAllBookingFromThisUser', error)
        throw error
    }
}

export async function getSpecificBooking(userId, bookingId) {
    try {
        return await prisma.booking.findFirst({
            where: { userId: userId, id: bookingId },
            include: {
                room: {
                    include: {
                        hotel: true
                    }
                },
                bookingGuests: true
            }
        })

    } catch (error) {
        console.log('error in getSpecificBooking', error)
        throw error
    }
}

export async function deleteSpecificBooking(userId, bookingId) {
    try {
        return await prisma.booking.delete({
            where: { userId: userId, id: bookingId },
        })

    } catch (error) {
        console.log('error in deleteSpecificBooking', error)
        throw error
    }
}

export async function getAllBookings() {
    try {
        return await prisma.booking.findMany({
            orderBy: { id: 'asc' },
            include: {
                room: {
                    include: {
                        hotel: {
                            include: {
                                hotelImg: true
                            }
                        }
                    }
                },
                bookingGuests: true
            }
        })

    } catch (error) {
        console.log('error in getAllBookings', error)
        throw error
    }
}

export async function updatedBookingStatus(bookingId) {
    try {
        return await prisma.booking.update({
            where: { id: bookingId },
            data: { bookingStatus: 'CONFIRMED' },
            include: {
                room: {
                    include: {
                        hotel: true
                    }
                },
                bookingGuests: true
            }
        })

    } catch (error) {
        console.log('error in updateBookingStatus', error)
        throw error
    }
}

export async function cancelBookingByUser(bookingId) {
    try {
        return await prisma.booking.update({
            where: { id: bookingId },
            data: { bookingStatus: 'CANCELLED' },
            include: {
                room: {
                    include: {
                        hotel: true
                    }
                },
                bookingGuests: true
            }
        })

    } catch (error) {
        console.log('error in cancelBookingByUser', error)
        throw error
    }
}

export async function findRoomData(roomId) {
    try {
        return await prisma.room.findUnique({
            where: { id: roomId },
        })

    } catch (error) {
        console.log('error in findRoomData', error)
        throw error
    }
}

export async function findDiscount(promoCode) {
    try {
        return await prisma.discount.findUnique({ where: { code: promoCode } })

    } catch (error) {
        console.log('error in findDiscount', error)
        throw error
    }
}

