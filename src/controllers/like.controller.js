import CreateHttpError from 'http-errors';
import { getHotelsById } from '../services/hotel.service.js';
import { createLike, findLike, getLikedHotelsByUser, unLike } from '../services/like.service.js';

export const createLikeCtrl = async (req,res,next) => {
    const { hotelid } = req.params
    // console.log(hotelid)
    // console.log(typeof(hotelid))
    const hotelId = Number(hotelid)
    // console.log(hotelId)
    const { id } = req.result

    const hotelData = await getHotelsById(hotelId)

    if (!hotelData) {
        return next(CreateHttpError[401]('Can\'t like this hotel'))
    }

    const haveLike = await findLike(id, hotelId)
    if (haveLike) {
        return next(CreateHttpError[400]('already like this hotel'))
    }

    const result = await createLike(id, hotelId)

    res.json({
        message: 'Like done',
		result: result
    })
}

export const deleteLikeCtrl = async (req,res,next) => {
    const { hotelid } = req.params
    const hotelId = Number(hotelid)
    const { id } = req.result

    const hotelData = await getHotelsById(hotelId)

    if (!hotelData) {
        return next(CreateHttpError[401]('Can\'t like this hotel'))
    }

    const haveLike = await findLike(id, hotelId)
    if (!haveLike) {
        return next(CreateHttpError[400]('already unlike this hotel'))
    }

    const result = await unLike(id, hotelId)

    res.json({
        message: 'UnLike done',
		result: result
    })
}

export const getLikedHotelsCtrl = async (req,res,next) => {
    const { id } = req.result

    const likedData = await getLikedHotelsByUser(id)

    res.json({
        message: 'You have get your like',
		result: likedData
    })
}