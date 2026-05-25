import express from 'express'
import { createReviewCtrl, DeleteReviewCtrl, getAllMyReviewsCtrl, getAllReviewsCtrl, getReviewByHotelCtrl, getReviewByIdCtrl } from '../controllers/review.controller.js'
import { authCheckUser } from '../middlewares/authenticate.js'

const reviewRoute = express.Router()

reviewRoute.post('/', createReviewCtrl)
reviewRoute.get('/', getAllReviewsCtrl)
reviewRoute.get('/my-reviews',authCheckUser, getAllMyReviewsCtrl)
reviewRoute.get('/hotel/:hotelId', getReviewByHotelCtrl)
reviewRoute.get('/:reviewId', getReviewByIdCtrl)
reviewRoute.delete('/:reviewId', DeleteReviewCtrl)


export default reviewRoute