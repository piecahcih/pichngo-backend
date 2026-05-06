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
const allowedOrigins = [
    process.env.CORS_ORIGIN, // This will be your main https://pich-and-go.vercel.app
    "http://localhost:5173"  // Local development
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or Postman)
        if (!origin) return callback(null, true);

        const isAllowed = allowedOrigins.includes(origin);
        const isVercelPreview = origin.endsWith('.vercel.app');

        if (isAllowed || isVercelPreview) {
            callback(null, true);
        } else {
            // This helps you see in Railway logs which URL is being blocked
            console.log("CORS blocked for origin:", origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));
// app.use(cors({
//     origin: process.env.CORS_ORIGIN ||"http://localhost:5173",
//     methods: ["GET","POST","PUT","PATCH","DELETE"],
//     credentials: true
// }))

app.use('/auth',authRoute)
app.use('/account',accRoute)
app.use('/like',likeRoute)
app.use('/hotels',hotelRoute)
app.use('/book',bookRoute)

app.use(notFoundMDW)
app.use(errHdlrMDW)

export default app