import { prisma } from '../lib/prisma.js'

export async function getAllHotels() {
    return await prisma.hotel.findMany({
        orderBy : { id : 'asc' },
        include : {
            hotelImg : { select : { img1: true, img2: true, img3: true, img4: true }},
            rooms : true,
            likes : true
        }
    })
}


export async function getAllHotelsByCity(city) {
    return await prisma.hotel.findMany({
        where : { city : city },
        orderBy : { id : 'asc' },
        include : {
            hotelImg : { select : { img1: true, img2: true, img3: true, img4: true }},
            rooms : true,
            likes : true
        }
    })
}

export async function getHotelsByName(name) {
    return await prisma.hotel.findFirst({
        where : { name : name  },
        include : {
            hotelImg : { select : { img1: true, img2: true, img3: true, img4: true }},
            rooms : true,
            likes : true
        }
    })
}

export async function getHotelsById(id) {
    return await prisma.hotel.findUnique({
        where : { id : id },
    })
}

export async function getHotelCountsByCity() {
    return await prisma.hotel.groupBy({
        by: ['city'],
        _count: { id: true }
    })
}