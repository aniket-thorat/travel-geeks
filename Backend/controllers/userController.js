// const mongoose = require('mongoose') ;
const User = require('../models/usermodel')
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken') ;

const createUser = asyncHandler(async(req , res)=>{
    const {name , email , password} = req.body ;
    console.log(email + " " + password) ;
    const userExist = await User.findOne({email}) ;
    if(userExist){
        res.status(400) ;
        throw new Error('User already exist') ;
    }
    
    const user = await User.create({
        name ,
        email,
        password
    })

    if(user){
        user.save() ;
        console.log('User created')
        console.log(user)
        res.status(201).json({
            _id:user._id ,
            name:user.name,
            email:user.email ,
            password:user.password,
            token : generateToken(user._id),
        })
    }
    else{
        res.status(400) ;
        throw new Error("Error Occured")
    }

})

const login_user = asyncHandler(async(req , res)=>{
    const {email , password} = req.body ;
    console.log('Email Received is ' , email ) ;
    console.log('Password received is ' , password) ;
    const userExist = await User.findOne({email});
    // console.log(userExist) ;
    if(userExist){
        console.log('User Found') ;
    }
})

module.exports = {createUser , login_user};