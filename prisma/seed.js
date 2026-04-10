import { prisma } from '../src/lib/prisma.js'
import bcrypt from 'bcrypt'
import { hotelImg } from '../data/hotelImg.js'
import { hotelData } from '../data/hoteldata.js'
import { roomData } from '../data/room.js'
import { bookingStatus } from '../src/generated/prisma/index.js'


const hashedPassword = ()=> bcrypt.hashSync('123456', 8)

const userData = [
    { name: 'ADMINPeach', email: 'ADMINpeach@gmail.com', password:hashedPassword(), role:'ADMIN', 
        profileImg:'https://i.pinimg.com/564x/2b/bc/af/2bbcaf8b5d4409e227782d4fe4484b59.jpg' },
    { name: 'Peach', email: 'peach@gmail.com', password:hashedPassword(), role:'USER', 
        profileImg:'https://i.pinimg.com/736x/82/b5/59/82b5591589b5b545726a31fd54728fd4.jpg'},
    { name: 'PeachPatchara', email: 'peachpatch@gmail.com', password:hashedPassword(), role:'USER', 
        profileImg:'https://res.cloudinary.com/piecahcih/image/upload/v1774238072/y9x0bjp2guf5q7ds8lmb.jpg'}
]

const travelerData = [
    { id: 1, firstName: 'Pichayapa', lastName: 'Thaisedhawatkul', userId: 3},
    { id: 2, firstName: 'Peach', lastName: 'Patchara', userId: 3}
]

const discountData = [
    {
        id: 1,
        code: 'FIRSTPICH30',
        description: 'get 30% discount on your first booking' ,
        value: 30,
        type: 'PERCENTAGE',
        minSpend: 5000,
        maxDiscount: 3000
    },
    {
        id: 2,
        code: 'AMAN2026',
        description: 'get 1000 THB discount on your booking at AMAN' ,
        value: 1000,
        type: 'FIXED_AMOUNT',
        minSpend: 5000,
        maxDiscount: 1000,
        startDate:new Date('2026-01-01'),
        endDate:new Date('2026-01-01'),
        hotels: {
            connect: [
                { id: 1 }, 
                { id: 32 }
            ]
        }
    },
    {
        id: 3,
        code: 'SONGKRAN2026',
        description: 'get 20% discount for your songkran trip' ,
        value: 30,
        type: 'PERCENTAGE',
        minSpend: 5000,
        maxDiscount: 3000
    },
]

const bookingData = [
    {
        userId: 3,
        roomId: 2,
        roomAmount: 1,
        numGuest: 2,
        checkInDate: new Date("2026-01-17"),
        checkOutDate: new Date("2026-01-18"),
        originalPrice: 45000,
        discountId: 1 ,
        discountAmount: 3000,
        taxesAndFees: 7434,
        finalPrice: 49434,
        bookingStatus: 'CONFIRMED'
    },
    {
        userId: 3,
        roomId: 1,
        roomAmount: 1,
        numGuest: 2,
        checkInDate: new Date("2026-05-17"),
        checkOutDate: new Date("2026-05-18"),
        originalPrice: 25000,
        discountId: 2 ,
        discountAmount: 1000,
        taxesAndFees: 4248,
        finalPrice: 28248
    },
    {
        userId: 3,
        roomId: 37,
        roomAmount: 1,
        numGuest: 2,
        checkInDate: new Date("2026-05-17"),
        checkOutDate: new Date("2026-05-18"),
        originalPrice: 32000,
        discountId: 2 ,
        discountAmount: 1000,
        taxesAndFees: 5487,
        finalPrice: 36487,
        bookingStatus: 'CANCELLED'
    },

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

    const modelNames = Object.keys(prisma).filter(
        (key) => !key.startsWith('$') && !key.startsWith('_') && key !== 'constructor'
    )
    await prisma.$transaction(async (tx) => {
        await tx.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 0;');
        for(const name of modelNames) {
            await tx.$executeRawUnsafe(`TRUNCATE TABLE \`${name}\`;`)
        }
        await tx.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 1;');
    })

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
    // for (const hotel of hotelData) {
    //     try {
    //         await prisma.hotel.create({ data: hotel });
    //     } catch (err) {
    //         console.error(`❌ Error creating hotel ${hotel.name}:`, err.message);
    //     }
    // }

    console.log(`Created : ${createdUsers.count} users`)
    console.log(`Created : ${createdTravelers.count} travelers`)
    console.log(`Created : ${createdHotels.count} hotels`)
    console.log(`Created : ${createdHotelImg.count} hotelImgs`)
    console.log(`Created : ${createdRooms.count} rooms`)
    console.log(`Created : ${createdDiscounts.count} discounts`)
    console.log(`Created : ${createdBooking.count} bookings`)
    console.log(`Created : ${createdBookingGuest.count} booking guests`)
    console.log(`Created : ${createdPayment.count} payments`)
}

main().then( async ()=>{
    await prisma.$disconnect()
}).catch( async (err)=>{
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
})