import CreateHttpError from 'http-errors';
import { calculateBookingRewards, getUserRewardsAndTier } from '../services/reward.service.js';



export async function calculateBookingRewardsCtrl(req, res, next) {

    const { finalPrice } = req.body;
    if (!finalPrice) {
        return next(CreateHttpError[400]('finalPrice for this booking is required'))
    }

    const reward = await calculateBookingRewards(Number(finalPrice));

    res.json({
        message: 'Booking rewards calculated successfully',
        reward: reward
    });

}


export async function getUserRewardsAndTierCtrl(req, res, next) {
    const { id } = req.result

    const rewardSummary = await getUserRewardsAndTier(id);

    res.json({
        message: 'User rewards and tier retrieved successfully',
        reward: rewardSummary
    });

}
