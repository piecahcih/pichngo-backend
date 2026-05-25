import CreateHttpError from 'http-errors';
import { createUser, getUserBy, syncUserToDb } from "../services/user.service.js"
import { loginSchema, registerSchema } from "../validations/schema.js"
import { signToken } from '../utils/jwt.js';
import bcrypt from 'bcrypt';
import { email } from 'zod';
import admin from '../utils/firebase.js';


export async function registerOrLoginWithGoogleCtrl(req,res,next){
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const idToken = authHeader.split(' ')[1]
  
  if(!idToken){
    return next(CreateHttpError[409]('No token provided'))
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    const { uid, email, name, picture } = decodedToken

    const user = await syncUserToDb(uid, email, name, picture)
    const token = signToken({ id: user.id })

    res.json({
        message: 'Success',
        token: token,
        user: user
    })

  } catch (error) {
    next(CreateHttpError[403]('Invalid or expired token'))
  }
}


export async function registerCtrl(req,res,next) {
    const {email, password, confirmPassword} = req.body 
    // console.log(req.body)

    const data = await registerSchema.parseAsync(req.body)
    // console.log(data)

    const foundUser = await getUserBy( 'email', data.email )
    if(foundUser) {
        return next(CreateHttpError[409]('This User has been registed'))
    }

    const createdUser = await createUser(data)
    // console.log(createdUser)
    const userInfo = {
        id : createdUser.id,
        email: data.email
    }
    if(createdUser.role !== 'USER'){
        userInfo.role = createdUser.role
    } 

    
    res.json({
        message: 'Register Successfully',
        user: userInfo
    })
}


export async function loginCtrl(req,res,next){
    const data = loginSchema.parse(req.body)

    const foundUser = await getUserBy('email', data.email)
    if(!foundUser) {
        return next(CreateHttpError[401]('Invalid Login 1'))
    }

    let rightPW = await bcrypt.compare(data.password, foundUser.password)
    if(!rightPW) {
        return next(CreateHttpError[401]('Invalid Login 2'))
    }

    const payload = { id : foundUser.id }
    const token = signToken(payload)
    
    const userInfo = { 
        id: foundUser.id,
        email: foundUser.email,
    }
    
    if(foundUser.profileImg !== null ){
        userInfo.profileImg = foundUser.profileImg
    }
    if(foundUser.name !== null ){
        userInfo.name = foundUser.name
    }

    if(foundUser.role !== 'USER'){
        userInfo.role = foundUser.role
    } 
    
    res.json({
        message: 'Login Successfully',
        token: token,
        user: userInfo
    })
}