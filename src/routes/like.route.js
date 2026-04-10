import express from 'express'
import { authCheckUser } from '../middlewares/authenticate.js'
import { createLikeCtrl, deleteLikeCtrl, getLikedHotelsCtrl } from '../controllers/like.controller.js'

const likeRoute = express.Router()

likeRoute.get('/',authCheckUser,getLikedHotelsCtrl)
likeRoute.post('/:hotelid',authCheckUser,createLikeCtrl)
likeRoute.delete('/:hotelid',authCheckUser,deleteLikeCtrl)

export default likeRoute