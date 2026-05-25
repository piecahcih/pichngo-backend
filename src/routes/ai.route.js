import express from 'express'
import { chatWithAi } from '../controllers/ai.controller.js'

const aiRoute = express.Router()


aiRoute.post('/',chatWithAi)

export default aiRoute