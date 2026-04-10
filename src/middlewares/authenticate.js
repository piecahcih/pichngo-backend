import CreateHttpError from 'http-errors'
import { verifyToken } from '../utils/jwt.js';
import { prisma } from '../lib/prisma.js'

export async function authCheckUser(req,res,next) {
    try {
        const authorization = req.headers.authorization
        if(!authorization || !authorization.startsWith('Bearer ')) {
            throw (CreateHttpError[401]('Unauthorization 1'))
        }

        const token = authorization.split(" ")[1]
        if(!token) { throw(CreateHttpError[401]('Unauthorized 2'))}

        const payload = verifyToken(token);
        const foundUser = await prisma.user.findUnique({
            where: { id: payload.id}
        })
        if(!foundUser) {
            return next(CreateHttpError[401]('Unauthorized 3'))
        }
        req.result = foundUser
        next()

    } catch (error) {
        next(error)
    }  
}

export async function authCheckAdmin(req,res,next) {
    try {
        const authorization = req.headers.authorization
        if(!authorization || !authorization.startsWith('Bearer ')) {
            throw (CreateHttpError[401]('Unauthorization 1'))
        }

        const token = authorization.split(" ")[1]
        if(!token) { throw(CreateHttpError[401]('Unauthorized 2'))}

        const payload = verifyToken(token);
        const foundUser = await prisma.user.findUnique({
            where: { 
                id: payload.id,
            }
        })
        if(!foundUser || foundUser.role !== 'ADMIN') {
            return next(CreateHttpError[401]('Unauthorized 3 (ADMIN role required)'))
        }
        req.result = foundUser
        next()

    } catch (error) {
        next(error)
    }  
}