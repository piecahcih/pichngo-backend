import express from 'express'
import { addTravelerInfoCtrl, deleteAccCtrl, deleteTravelerInfoCtrl, getTravelerInfoCtrl, updateAccCtrl, updateTravelerInfoCtrl } from '../controllers/account.controller.js'
import { authCheckUser } from '../middlewares/authenticate.js'

const accRoute = express.Router() 

accRoute.get('/profile',(req,res)=>{res.json('profile')})//get user info while login alr so no need
accRoute.patch('/profile', authCheckUser, updateAccCtrl)
accRoute.delete('/profile', authCheckUser, deleteAccCtrl)
accRoute.get('/traveler-info', authCheckUser, getTravelerInfoCtrl)
accRoute.post('/traveler-info', authCheckUser, addTravelerInfoCtrl)
accRoute.patch('/traveler-info', authCheckUser, updateTravelerInfoCtrl)
accRoute.delete('/traveler-info', authCheckUser, deleteTravelerInfoCtrl)
accRoute.get('/bookings',(req,res)=>{res.json('bookings')})
accRoute.get('/rewards',(req,res)=>{res.json('rewards')})
accRoute.get('/reviews',(req,res)=>{res.json('reviews')})

export default accRoute