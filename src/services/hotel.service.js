import { prisma } from '../lib/prisma.js'

export async function getAllHotels() {
    try {
        return await prisma.hotel.findMany({
            orderBy: { id: 'asc' },
            include: {
                hotelImg: { select: { img1: true, img2: true, img3: true, img4: true } },
                rooms: true,
                likes: true
            }
        })

    } catch (error) {
        console.log('error in getAllHotels', error)
        throw error
    }

}


export async function getAllHotelsByCity(city) {
    try {
        return await prisma.hotel.findMany({
            where: { city: city },
            orderBy: { id: 'asc' },
            include: {
                hotelImg: { select: { img1: true, img2: true, img3: true, img4: true } },
                rooms: true,
                likes: true
            }
        })

    } catch (error) {
        console.log('error in getAllHotelsByCity', error)
        throw error
    }
}

export async function getHotelsByName(name, checkIn, checkOut) {
    try {
        const hotel = await prisma.hotel.findFirst({
            where: { name: name },
            include: {
                hotelImg: { select: { img1: true, img2: true, img3: true, img4: true } },
            rooms : true,
            likes : true
            }
        })

        const roomIds = hotel.rooms.map(r => r.id)

        const overlappingBookings = await prisma.booking.findMany({
            where: {
                roomId: { in: roomIds },    
                bookingStatus: { not: 'CANCELLED' },
                AND: [
                    { checkInDate: { lt: new Date(checkOut) } },
                    { checkOutDate: { gt: new Date(checkIn) } },
                ]
            },
            select: { roomId: true, roomAmount: true }
        })
        
        const bookedCountByRoom = {}
        for (const b of overlappingBookings) {
            bookedCountByRoom[b.roomId] = (bookedCountByRoom[b.roomId] || 0) + b.roomAmount
        }

        console.log('roomIds', roomIds)
        console.log('overlappingBookings', overlappingBookings)
        console.log('bookedCountByRoom', bookedCountByRoom)

        const mappedRooms = hotel.rooms.map(room => {
            const bookedCount = bookedCountByRoom[room.id] || 0
            console.log('bookedCount', bookedCount)
            const availableCount = Math.max(0, room.roomAmount - bookedCount)
            console.log('room', room)
            console.log('room.roomAmount', room.roomAmount)
            console.log('availableCount', availableCount)
            return {
                ...room,
                bookedCount,
                availableCount,
                isFull: availableCount === 0  
            }
        })

        return { ...hotel, rooms: mappedRooms }
        
    } catch (error) {
        console.log('error in getHotelsByName', error)
        throw error
    }
}
// if (hotel && checkIn && checkOut && checkIn !== 'null' && checkOut !== 'null') {
//     const mappedRooms = hotel.rooms.map(room => {
//         const bookings = room.bookings || []
//         const bookedCount = bookings.reduce((sum, b) => sum + (b.roomAmount || 0), 0)
//         console.log('bookedCount', bookedCount)
//         console.log('bookings', bookings)
//         const isFull = bookedCount >= room.roomAmount
//         return {
//             ...room,
//             isFull,
//             bookedCount,
//             availableCount: Math.max(0, room.roomAmount - bookedCount)
//         }
//     })
//     return { ...hotel, rooms: mappedRooms }
// }

export async function getHotelsById(id) {
    try {
        return await prisma.hotel.findUnique({
            where: { id: id },
        })

    } catch (error) {
        console.log('error in getHotelsById', error)
        throw error
    }
}

export async function getHotelCountsByCity() {
    try {
        return await prisma.hotel.groupBy({
            by: ['city'],
            _count: { id: true }
        })

    } catch (error) {
        console.log('error in getHotelCountsByCity', error)
        throw error
    }
}