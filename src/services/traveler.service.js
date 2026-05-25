import { prisma } from '../lib/prisma.js'

export async function getTravelerInfo(userId) {
    try {
        return await prisma.travelerInfo.findMany({
            where: { userId: userId }
        })

    } catch (error) {
        console.log('error in getTravelerInfo', error)
        throw error
    }
}

export async function getTravelerInfobyId(travelerId) {
    try {
        return await prisma.travelerInfo.findUnique({
            where: { id: travelerId }
        })

    } catch (error) {
        console.log('error in getTravelerInfobyId', error)
        throw error
    }
}

export async function createTraveler(data) {
    try {
        return await prisma.travelerInfo.create({ data: data })

    } catch (error) {
        console.log('error in createTraveler', error)
        throw error
    }
}

export async function updateTravelerInfo(travelerId, data) {
    try {
        return await prisma.travelerInfo.update({
            where: { id: travelerId },
            data: data
        })

    } catch (error) {
        console.log('error in updateTravelerInfo', error)
        throw error
    }
}

export async function deleteTraveler(travelerId) {
    try {
        return await prisma.travelerInfo.delete({
            where: { id: travelerId }
        })

    } catch (error) {
        console.log('error in deleteTraveler', error)
        throw error
    }
}