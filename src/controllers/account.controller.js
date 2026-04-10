import { deleteUser, getUserBy, updateUser } from "../services/user.service.js"
import { updateSchema } from "../validations/schema.js"
import CreateHttpError from 'http-errors'
import bcrypt from 'bcrypt'
import { createTraveler, deleteTraveler, getTravelerInfo, getTravelerInfobyId, updateTravelerInfo } from "../services/traveler.service.js"

export async function updateAccCtrl(req,res,next) {
    const { id } = req.result
    const { name, email, password, profileImg } = req.body

    const data = await updateSchema.parseAsync(req.body)

    if(data.password) {
        data.password = await bcrypt.hash(password,8)
    }

    const foundUser = await getUserBy( 'id', id )
    if(foundUser.id !== id){
        return next(CreateHttpError[405]('You not allowed to change this user information'))
    }
    
    // console.log(foundUserEmail)
    if(email){
        const foundUserEmail = await getUserBy( 'email', email )

        if(foundUserEmail){
            return next(CreateHttpError[409]('Email must be Unique'))
        } 
    }
    // if(foundUserEmail&&email){
    //     return next(CreateHttpError[409]('Email must be Unique'))
    // } 


    console.log("Data being sent to Prisma:", data);
    const updatedUser = await updateUser( id, data )

    const userInfo = {
        id : updatedUser.id,
    }

    if(updatedUser.name !== null ){
        userInfo.name = updatedUser.name
    }
    if(updatedUser.email !== null ){
        userInfo.email = updatedUser.email
    }
    // if(updatedUser.password !== 'null'){
    //     userInfo.password = hashnewPW  
    // }
    if(updatedUser.profileImg !== null ){
        userInfo.profileImg = updatedUser.profileImg
    }

    res.json({
        message: 'Update Successfully',
        user: userInfo
    })
}


export async function deleteAccCtrl (req,res,next) {
    const { id } = req.result 
    
    const foundUser = await getUserBy('id', id )
    if(foundUser.id !== id){
        return next(CreateHttpError[405]('You not allowed to change this user information'))
    }

    const deletedUser = await deleteUser(id)
    
    const {password, role, profileImg, createdAt, ...userInfo} = deletedUser

    res.json({
        message: 'Delete Successfully',
        user: userInfo
    })
}


export async function getTravelerInfoCtrl (req,res,next){
    const { id } = req.result

    const travelerInfo = await getTravelerInfo(id)
    if(!travelerInfo || travelerInfo.length === 0){
        res.json({
            message: 'There\'s still no traveler info in this user',
            travelerInfo: []
        }) 
        return next (CreateHttpError[404]('You haven\'t add traveler info yet'))
    }


    res.json({
        message: 'Get Traveler Successfully',
        travelerInfo: travelerInfo
    })    
}

export async function addTravelerInfoCtrl (req,res,next){
    const { id } = req.result
    const userId =  Number(id) 
    const { firstName, lastName } = req.body

    const data = { firstName, lastName, userId }

    const createdTraveler = await createTraveler(data)

    res.json({
        message: 'Add Traveler Successfully',
        travelerInfo: createdTraveler
    })    
}

export async function updateTravelerInfoCtrl (req,res,next){
    const { id, firstName, lastName } = req.body
    const data ={ firstName, lastName }

    const travelerId = await getTravelerInfobyId(id)
    if(id !== travelerId.id){
        // console.log("id", typeof(id))
        // console.log("id", id)
        // console.log("tvlid", typeof(travelerId))
        // console.log("tvlid", travelerId)
        return next(CreateHttpError[405]('Wrong Traveler Id'))
    }

    const updatedTraveler = await updateTravelerInfo(travelerId.id,data)

    res.json({
        message: 'Update Traveler Info Successfully',
        travelerInfo: updatedTraveler
    })    
}

export async function deleteTravelerInfoCtrl (req,res,next){
    const { id } = req.body

    if(!id){
        return next(CreateHttpError[400]('Traveler Id is required'))
    }

    const deletedUser = await deleteTraveler(id)

    res.json({
        message: 'Delete Traveler Successfully',
        travelerInfo: deletedUser
    })    
}