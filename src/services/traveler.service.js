import {prisma} from '../lib/prisma.js'

export async function getTravelerInfo( userId ){
    return await prisma.travelerInfo.findMany({
        where : { userId : userId }
    })
}

export async function getTravelerInfobyId( travelerId ){
    return await prisma.travelerInfo.findUnique({
        where : { id : travelerId }
    })
}

export async function createTraveler(data) {
    return await prisma.travelerInfo.create({ data : data })
}

export async function updateTravelerInfo( travelerId, data ) {
    return await prisma.travelerInfo.update({ 
        where : { id: travelerId },
        data : data
    })
}

export async function deleteTraveler( travelerId ) {
    return await prisma.travelerInfo.delete({ 
        where : { id: travelerId }
    })
}