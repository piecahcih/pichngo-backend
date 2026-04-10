import { getAllHotels, getAllHotelsByCity, getHotelsByName, getHotelCountsByCity } from "../services/hotel.service.js"
import CreateHttpError from 'http-errors';

export const getAllHotelsCtrl = async (req,res) => {
    const foundHotel = await getAllHotels()
    res.json({hotels: foundHotel})
}

export const getAllHotelsByCityCtrl = async (req,res,next) => {
    const paramsCity = req.params.city
    const city = paramsCity.replaceAll('-', ' ')
    // console.log(city)

    const foundHotels = await getAllHotelsByCity(city)
    if(!foundHotels || foundHotels.length === 0) {
        return next (CreateHttpError[404]('There\'s no hotels in this city'))
    }

    res.json({hotels: foundHotels})
}

export const getHotelsByNameCtrl = async (req,res,next) => {
    // const paramsCity = req.params.city
    // const city = paramsCity.replaceAll('-', ' ')
    const paramsName = req.params.hotelname
    const name = paramsName.replaceAll('-', ' ')

    const foundHotel = await getHotelsByName(name)
    if(!foundHotel) {
        return next (CreateHttpError[404]('There\'s no hotels in this name'))
    }

    res.json({hotels: foundHotel})
}

export const getHotelCountsByCityCtrl = async (req,res,next) => {
    const counts = await getHotelCountsByCity()

    if(!counts) {
        return next (CreateHttpError[404]('There\'s no hotels in this name'))
    }
    
    res.json({
        message: 'count hotels successfully',
		hotelCounts: counts
    })
}