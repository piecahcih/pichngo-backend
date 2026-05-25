import express from 'express'
import { authCheckAdmin, authCheckUser } from '../middlewares/authenticate.js'
import { addBookingsCtrl, cancelBookingByUserCtrl, deleteSpecificBookingsCtrl, getAllBookingsCtrl, getAllBookingsFromThisUserCtrl, getSpecificBookingsCtrl, pricePreviewCtrl, updateBookingStatusCtrl } from '../controllers/book.controller.js'

const bookRoute = express.Router()

bookRoute.get('/all',authCheckAdmin ,getAllBookingsCtrl)
bookRoute.patch('/updatestatus',authCheckAdmin ,updateBookingStatusCtrl)
bookRoute.patch('/',authCheckUser ,cancelBookingByUserCtrl)
bookRoute.get('/',authCheckUser , getAllBookingsFromThisUserCtrl)
bookRoute.post('/pricepreview', pricePreviewCtrl)
bookRoute.get('/:bookingid',authCheckUser ,getSpecificBookingsCtrl)
bookRoute.delete('/',authCheckUser ,deleteSpecificBookingsCtrl)
bookRoute.post('/',authCheckUser ,addBookingsCtrl)
// bookRoute.get('/confirmed',authCheckUser ,(req,res)=>{res.json('get book confirmed')})
// bookRoute.post('/payment',authCheckUser ,(req,res)=>{res.json('post book payment')})

export default bookRoute