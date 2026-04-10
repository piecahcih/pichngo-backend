import { prisma } from '../lib/prisma.js'

export async function addBooking(BKdata){
    return await prisma.booking.create({ 
        data: BKdata,
        include:{
            room: {
                include: {
                    hotel: {
                        include: {
                            hotelImg: true
                        }
                    }
                }
            }
        } , 
    })
}

export async function checkRoomAvailability(roomId, checkInDateNum, checkOutDateNum){
    return await prisma.booking.findFirst({
        where: { 
            roomId: roomId,
            bookingStatus: { not: "CANCELLED"},

            AND: [
                {checkInDate: { lt: checkOutDateNum }},
                {checkOutDate: { gt: checkInDateNum }},
            ]
        }
    })
}

export async function addBookingGuest(BKGdata, bookingId){
    const formattedGuests = BKGdata.map((guest) => ({
        bookingId: bookingId,
        firstName: guest.firstName, 
        lastName: guest.lastName 
    }))

    await prisma.bookingGuest.createMany({ 
        data: formattedGuests
    })

    return await prisma.bookingGuest.findMany({
        where:{bookingId: bookingId}
    })
}

export async function addPayment(Pdata){
    return await prisma.payment.create({ data: Pdata })
}


export async function getAllBookingFromThisUser(userId){
    return await prisma.booking.findMany({
        where: { userId: userId },
        include:{
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
}

export async function getSpecificBooking(userId, bookingId){
    return await prisma.booking.findFirst({
        where: { userId: userId, id: bookingId },
        include:{
            room: {
                include: {
                    hotel: true
                }
            },
            bookingGuests: true
        }  
    })
}

export async function deleteSpecificBooking(userId, bookingId){
    return await prisma.booking.delete({
        where: { userId: userId, id: bookingId },
    })
}

export async function getAllBookings(){
    return await prisma.booking.findMany({
        orderBy: { id: 'asc'},
        include:{
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
}

export async function updatedBookingStatus(bookingId){
    return await prisma.booking.update({
        where: { id: bookingId },
        data: { bookingStatus: 'CONFIRMED' },
        include:{
            room: {
                include: {
                    hotel: true
                }
            },
            bookingGuests: true
        }  
    })
}

export async function cancelBookingByUser(bookingId){
    return await prisma.booking.update({
        where: { id: bookingId },
        data: { bookingStatus: 'CANCELLED' },
        include:{
            room: {
                include: {
                    hotel: true
                }
            },
            bookingGuests: true
        }  
    })
}

export async function findRoomData(roomId){
    return await prisma.room.findUnique({
        where: { id: roomId },
    })
}

export async function findDiscount(promoCode){
    return await prisma.discount.findUnique({ where: { code: promoCode }})
}