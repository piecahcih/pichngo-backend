import CreateHttpError from 'http-errors';
import { findRoomData, findDiscount } from '../services/book.service.js';
import priceCalculator from '../utils/priceCalculator.js';
import stripe from '../configs/stripe.js';
import { differenceInDays } from 'date-fns';

export const createPaymentIntentCtrl = async (req,res,next) => {
    const { id } = req.result
    const { roomId, checkInDate, checkOutDate, roomAmount, promoCode } = req.body
    
    const room = await findRoomData(Number(roomId))
    console.log('room', room)

    const checkin = new Date(checkInDate)
    const checkout = new Date(checkOutDate)
    let nightCount = differenceInDays(checkout, checkin)
    if (nightCount <= 0) nightCount = 1

    let discountRecord = null
    if (promoCode) {
        discountRecord = await findDiscount(promoCode)
    }

    const priceData = priceCalculator(room, nightCount, roomAmount, discountRecord)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(priceData.finalPrice * 100),
        currency: 'thb',
        metadata: { roomId, userId: id }
    })


    res.json({
        message: 'Create Payment Intent Successfully',
        clientSecret: paymentIntent.client_secret,
        pricePreview: priceData,

    })
}
