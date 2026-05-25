import express from "express";
import { loginCtrl, registerCtrl, registerOrLoginWithGoogleCtrl } from "../controllers/auth.controller.js";

const authRoute = express.Router()


authRoute.post('/registerOrLoginWithGoogle', registerOrLoginWithGoogleCtrl)
authRoute.post('/register', registerCtrl)
authRoute.post('/register/admin', registerCtrl)
authRoute.post('/login', loginCtrl)

export default authRoute