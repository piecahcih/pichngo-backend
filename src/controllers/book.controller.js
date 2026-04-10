import CreateHttpError from 'http-errors';
import { addBooking, addBookingGuest, addPayment, cancelBookingByUser, checkRoomAvailability, deleteSpecificBooking, findDiscount, findRoomData, getAllBookingFromThisUser, getAllBookings, getSpecificBooking, updatedBookingStatus } from '../services/book.service.js';
import { differenceInDays } from "date-fns"
import priceCalculator from '../utils/priceCalculator.js';

//ADMIN
export async function getAllBookingsCtrl (req,res,next) {
    const allBookings = await getAllBookings()

    res.json({
        message: 'get every bookings',
        bookingInfo: allBookings
    })
} 

export async function updateBookingStatusCtrl (req,res,next) {
    const  bookingid  = req.body.data.id
    console.log('req.body', req.body)
    console.log('bookingId', bookingid)

    const updatedStatus = await updatedBookingStatus(Number(bookingid))

    res.json({
        message: 'Admin update Booking Successfully',
        bookingInfo: updatedStatus
    })
} 



//USER

export async function cancelBookingByUserCtrl (req,res,next) {
    const  bookingid  = req.body.data.id
    // console.log('reqbo', req.body)
    console.log('bookingId', bookingid)
    // console.log('bookingId', typeof(bookingid))

    const cancelledBooking = await cancelBookingByUser(Number(bookingid),)

    res.json({
        message: 'cancelled Booking Successfully',
        bookingInfo: cancelledBooking
    })
} 

export async function pricePreview (req,res,next) {
    const { roomId, checkInDate, checkOutDate, roomAmount, promoCode } = req.body

    const room = await findRoomData(roomId)
    console.log('room', room)
    
    const checkin = new Date(checkInDate)
    const checkout = new Date(checkOutDate)
    let nightCount = differenceInDays(checkout, checkin)
    if (nightCount <= 0) nightCount = 1

    const priceData = priceCalculator(room, nightCount, roomAmount, promoCode)


    res.json({
        message: 'Price Preview Successfully',
        pricePreview: priceData
    })
}

export async function addBookingsCtrl (req,res,next) {
    const { id } = req.result
    // console.log('id', id)
    const { bookingDetails, guestList, paymentDetails } = req.body

    const { roomId, roomAmount, numGuest, checkInDate, checkOutDate, promoCode } = bookingDetails

    const checkInDateNum = new Date(checkInDate)
    const checkOutDateNum = new Date(checkOutDate)
    let nightCount = differenceInDays(checkOutDateNum, checkInDateNum)

    if (nightCount <= 0) nightCount = 1

    if( checkInDateNum > checkOutDateNum) {
        return next(CreateHttpError[403]('Check In date must be lessthan Check Out date'))
    }

    if( checkInDateNum < new Date() || checkOutDateNum < new Date()) {
        return next(CreateHttpError[403]('Check In-Out date must not be later than current date'))
    }

    const isBooked = await checkRoomAvailability(roomId, checkInDateNum, checkOutDateNum)
    if(isBooked) {
        return next(CreateHttpError[400]('This room has been booked'))
    }

    let appliedDiscountId = null;
    if (promoCode) {
        const discountRecord = await findDiscount(promoCode)
        if (discountRecord) appliedDiscountId = discountRecord.id
    }

    const room = await findRoomData(roomId)
    console.log('roomCtrl', room)
    const priceData = priceCalculator(room, nightCount, roomAmount, promoCode)
    const { originalPrice,discountAmount,taxesAndFees,finalPrice } = priceData
    console.log('priceData', priceData)
    
    const BKdata = { roomId, roomAmount, numGuest, 
        checkInDate: checkInDateNum, 
        checkOutDate: checkOutDateNum,
        userId: id,
        originalPrice: originalPrice,
        discountAmount: discountAmount,
        discountId: appliedDiscountId,
        taxesAndFees: taxesAndFees,
        finalPrice: finalPrice    
    }

    const addBookingInfo = await addBooking(BKdata)

    const guestListInfo = await addBookingGuest(guestList, addBookingInfo.id)
    console.log('guestListInfo', guestListInfo)

    const { paymentMethod, accountName, amount, paymentDate, paymentRefNo, paymentStatus } = paymentDetails
    const Pdata = { paymentMethod, accountName, amount, paymentRefNo, paymentStatus, 
        paymentDate: new Date(paymentDate),
        bookingId: addBookingInfo.id 
    }

    const paymentInfo = await addPayment(Pdata)


    res.json({
        message: 'Add Booking Successfully',
        bookingInfo: {
            bookingDetails: addBookingInfo,
            guestList: guestListInfo,
            paymentDetails: paymentInfo
        }//this data is object
    }) 
} 

export async function getAllBookingsFromThisUserCtrl (req,res,next) {
    const { id } = req.result

    const allBookings = await getAllBookingFromThisUser(id)

    res.json({
        message: 'Successfully get all booking from this user',
        bookingInfo: allBookings
    })
} 

export async function getSpecificBookingsCtrl (req,res,next) {
    const { id } = req.result
    const { bookingid } = req.params
    // console.log('bookingid', bookingid)

    const thisBooking = await getSpecificBooking(id, Number(bookingid)) 

    res.json({
        message: 'get specific booking id',
        bookingInfo: thisBooking
    })
} 

export async function deleteSpecificBookingsCtrl (req,res,next) {
    const { id } = req.result
    const bookingid = req.body.id
    console.log('bookingid', typeof(bookingid))

    const thisBooking = await deleteSpecificBooking(id, bookingid) 

    res.json({
        message: 'get specific booking id',
        bookingInfo: thisBooking
    })
} 