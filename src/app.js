import express from 'express'
import cors from 'cors'
import { errHdlrMDW } from './middlewares/errHdlr.mdw.js'
import { notFoundMDW } from './middlewares/notFound.mdw.js'
import authRoute from './routes/auth.route.js'
import accRoute from './routes/account.route.js'
import hotelRoute from './routes/hotel.route.js'
import likeRoute from './routes/like.route.js'
import bookRoute from './routes/book.route.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5174"],
    methods: ["GET","POST","PUT","PATCH","DELETE"],
    credentials: true
}))

app.use('/auth',authRoute)
app.use('/account',accRoute)
app.use('/like',likeRoute)
app.use('/hotels',hotelRoute)
app.use('/book',bookRoute)

app.use(notFoundMDW)
app.use(errHdlrMDW)

export default app