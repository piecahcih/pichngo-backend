export const discountData = [
    {
        code: 'FIRSTPICH30',
        description: 'get 30% discount on your first booking',
        value: 30,
        type: 'PERCENTAGE',
        minSpend: 5000,
        maxDiscount: 3000,
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259841/firstpich30_ig5mc5.png'
    },
    {
        code: 'AMAN2026',
        description: 'get 1000 THB discount on your booking at AMAN',
        value: 1000,
        type: 'FIXED_AMOUNT',
        minSpend: 5000,
        maxDiscount: 1000,
        startDate: new Date('2026-01-01'),
        endDate: new Date('2028-01-01'),
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259843/aman2026_ogl1it.png',
        hotels: {
            connect: [
                { id: 1 },
                { id: 32 }
            ]
        }
    },
    {
        code: 'SONGKRAN2026',
        description: 'get 20% discount for your songkran trip',
        value: 30,
        type: 'PERCENTAGE',
        minSpend: 5000,
        maxDiscount: 3000,
        startDate: new Date('2026-04-01'),
        endDate: new Date('2026-05-01'),
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259841/songkran2026_ygmopg.png'
    },
    {
        code: 'SUMMERVIBES',
        description: 'get 15% discount for your summer vacation',
        value: 15,
        type: 'PERCENTAGE',
        minSpend: 3000,
        maxDiscount: 1500,
        startDate: new Date('2026-04-01'),
        endDate: new Date('2026-08-31'),
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259841/summervibes_uo6o6p.png'
    },
    {
        code: 'WELCOMEBACK500',
        description: 'get 500 THB discount on your next stay',
        value: 500,
        type: 'FIXED_AMOUNT',
        minSpend: 2500,
        maxDiscount: 500,
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259841/welcomeback500_kl1kem.png'
    },
    {

        code: 'LUXURYSTAY25',
        description: 'get 25% discount on luxury hotels',
        value: 25,
        type: 'PERCENTAGE',
        minSpend: 10000,
        maxDiscount: 5000,
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259842/luxurystay25_olydkm.png',
        hotels: {
            connect: [
                { id: 2 },
                { id: 5 },
                { id: 8 }
            ]
        }
    },
    {
        code: 'WEEKENDGETAWAY',
        description: '10% off for weekend bookings',
        value: 10,
        type: 'PERCENTAGE',
        minSpend: 2000,
        maxDiscount: 800,
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259841/weekendgetaway_zfydd5.png'
    },
    {
        code: 'PICHNGO1000',
        description: 'Flat 1000 THB off for app users',
        value: 1000,
        type: 'FIXED_AMOUNT',
        minSpend: 6000,
        maxDiscount: 1000,
        discountImage: 'https://res.cloudinary.com/piecahcih/image/upload/v1779259841/pichngo1000_rzcgjr.png'
    }
]