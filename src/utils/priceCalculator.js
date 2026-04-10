

function priceCalculator(room, nightCount, roomAmount, promo = null) {
    const originalPrice = room.nightlyRate * nightCount * roomAmount
    console.log('room', room)

    let discountAmount = 0
    if(promo) {
        if(promo.type === 'PERCENTAGE') {
            discountAmount = originalPrice * (promo.value/100)
            
        } else if (promo.type === 'FIXED_AMOUNT') {
            discountAmount = promo.value
        }
    }
    
    const discountPrice = originalPrice - discountAmount

    const servicechargeprice = discountPrice * 0.10
    const totalPricewSVC = discountPrice + servicechargeprice
    const VATprice = totalPricewSVC * 0.07
    const taxesAndFees = servicechargeprice + VATprice

    const finalPrice = discountPrice + taxesAndFees


  return {
    originalPrice,
    discountAmount,
    taxesAndFees,
    finalPrice
  }
}

export default priceCalculator