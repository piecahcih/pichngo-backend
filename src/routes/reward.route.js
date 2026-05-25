import express from 'express'
import { calculateBookingRewardsCtrl, getUserRewardsAndTierCtrl } from '../controllers/reward.controller.js'
import { authCheckUser } from '../middlewares/authenticate.js'

const rewardRoute = express.Router()

rewardRoute.post('/', calculateBookingRewardsCtrl)
rewardRoute.get('/', authCheckUser, getUserRewardsAndTierCtrl)

export default rewardRoute