import CreateHttpError from 'http-errors';
import { createUser, getUserBy } from "../services/user.service.js"
import { loginSchema, registerSchema } from "../validations/schema.js"
import { signToken } from '../utils/jwt.js';
import bcrypt from 'bcrypt';
import { email } from 'zod';

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