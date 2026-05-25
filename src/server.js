import 'dotenv/config'
import app from './app.js'
import { calculateAllHotelsRatings } from './services/review.service.js'

const port = process.env.PORT || 3000

app.listen(port, async () => {
    console.log(`Server is running on port: ${port}`)
    
    try {
        await calculateAllHotelsRatings()
    } catch (err) {
        console.error("Failed to run startup ratings recalculation:", err)
    }

    const SIX_HOURS = 6 * 60 * 60 * 1000
    setInterval(async () => {
        try {
            await calculateAllHotelsRatings()
        } catch (err) {
            console.error("Failed to run periodic ratings recalculation:", err)
        }
    }, SIX_HOURS)
})
