import express from 'express'
import { getAllHotelsByCityCtrl, getHotelsByNameCtrl, getAllHotelsCtrl, getHotelCountsByCityCtrl } from '../controllers/hotel.controller.js'

const hotelRoute = express.Router()

hotelRoute.get('/', getAllHotelsCtrl)
hotelRoute.get('/counts', getHotelCountsByCityCtrl)
hotelRoute.get('/:city', getAllHotelsByCityCtrl)
hotelRoute.get('/:city/:hotelname', getHotelsByNameCtrl)

export default hotelRoute