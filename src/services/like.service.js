import { prisma } from '../lib/prisma.js'

export async function findLike(id, hotelId) {
    return await prisma.like.findUnique({
        where: {
          userId_hotelId: {
            userId:  id,
            hotelId: hotelId
          }  
        }
    })
}

export async function createLike(id, hotelId) {
    return await prisma.like.create({
        data: { userId: id, hotelId: hotelId}
    })
}

export async function unLike(id, hotelId) {
    return await prisma.like.delete({
        where: {
          userId_hotelId: {
            userId:  id,
            hotelId: hotelId
          }  
        }
    })
}
export async function getLikedHotelsByUser(id) {
    return await prisma.hotel.findMany({
        where: { likes: { some: { userId: id }}},
        include: { 
            hotelImg: true,
            likes: true
        }
    })
}
