import express from 'express'
import { getAllDiscountsCtrl, getDiscountByCodeCtrl } from '../controllers/discount.controller.js'

const discountRoute = express.Router()

discountRoute.get('/', getAllDiscountsCtrl)
discountRoute.get('/:code', getDiscountByCodeCtrl)

export default discountRoute