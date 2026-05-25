import { prisma } from '../lib/prisma.js'

export async function getAllDiscounts() {
    try {
        return await prisma.discount.findMany({
            where: {
                OR: [
                    { endDate: { gt: new Date() } }, 
                    { endDate: null }   
                ]            
            }
        })
        
    } catch (error) {
        console.log('error in getAllDiscounts', error)
        throw error
    }
}

export async function getDiscountByCode(code) {
    try {
        return await prisma.discount.findUnique({
            where: {
                code: code
            }
        })

    } catch (error) {
        console.log('error in getDiscountByCode', error)
        throw error
    }
}