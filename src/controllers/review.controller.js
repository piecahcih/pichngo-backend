import CreateHttpError from 'http-errors';
import { createReview, DeleteReview, getAllMyReviews, getAllReviews, getReviewByHotel, getReviewById } from "../services/review.service.js";

export const createReviewCtrl = async (req, res, next) => {

    const { userId, hotelId, roomId, reviewContent, rating, stayedDate, reviewImg } = req.body


    const review = {
        userId: Number(userId),
        hotelId: Number(hotelId),
        roomId: Number(roomId),
        reviewContent,
        rating: Number(rating),
        stayedDate: stayedDate ? new Date(stayedDate) : new Date()
    }

    if(reviewImg){
        review.reviewImg = reviewImg
    }

    const createdReview = await createReview(review)

    res.status(201).json({
        message: 'Create Review Successfully',
        reviews: createdReview
    })

}

export const getAllReviewsCtrl = async (req, res, next) => {

    const reviews = await getAllReviews()
    if (!reviews) {
        throw CreateHttpError(404, 'No reviews found')
    }
    res.status(200).json({
        message: 'Get All Reviews Successfully',
        reviews: reviews
    })

}

export const getAllMyReviewsCtrl = async (req, res, next) => {
    const { id } = req.result

    const myReviews = await getAllMyReviews(id)
    if (!myReviews) {
        throw CreateHttpError(404, 'This user haven\'t reviewed yet')
    }
    res.status(200).json({
        message: 'Get My Reviews Successfully',
        reviews: myReviews
    })

}

export const getReviewByHotelCtrl = async (req, res, next) => {

    const { hotelId } = req.params
    const review = await getReviewByHotel(Number(hotelId))
    if (!review) {
        throw CreateHttpError(404, 'No reviews found')
    }
    res.status(200).json({
        message: 'Get All Reviews in this hotels Successfully',
        reviews: review
    })

}

export const getReviewByIdCtrl = async (req, res, next) => {

    const { reviewId } = req.params
    const review = await getReviewById(Number(reviewId))
    if (!review) {
        throw CreateHttpError(404, 'No reviews found')
    }
    res.status(200).json({
        message: 'Get Review By Id Successfully',
        reviews: review
    })

}

export const DeleteReviewCtrl = async (req, res, next) => {

    const { reviewId } = req.params
    const review = await DeleteReview(Number(reviewId))
    if (!review) {
        throw CreateHttpError(404, 'No reviews found')
    }
    res.status(200).json({
        message: 'Delete Review Successfully',
        reviews: review
    })

}
