import express from 'express'
import { createPaymentIntentCtrl } from '../controllers/payment.controller.js'
import { authCheckUser } from '../middlewares/authenticate.js'

const paymentRoute = express.Router()

paymentRoute.post('/create-intent', authCheckUser, createPaymentIntentCtrl)

export default paymentRoute