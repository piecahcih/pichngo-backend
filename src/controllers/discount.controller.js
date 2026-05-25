import { getAllDiscounts, getDiscountByCode } from "../services/discount.service.js";


export const getAllDiscountsCtrl = async (req, res) => {

    const discounts = await getAllDiscounts();
    return res.json({
        message: 'Get All discount Successfully',
        discount: discounts
    });

}

export const getDiscountByCodeCtrl = async (req, res) => {

    const { code } = req.params
    const discount = await getDiscountByCode(code)
    return res.json({
        message: 'Get discount by code Successfully',
        discount: discount
    })

}
