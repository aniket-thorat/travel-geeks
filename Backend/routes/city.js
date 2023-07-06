const router = require('express').Router() ;
const multer = require('multer') ;
const {v4 : uuidv4 } = require('uuid') ;
const path = require("path") ;


const storage = multer.diskStorage({
    destination: function(req , file , cb){
        cb(null , 'images') ;
    },
    filename : function(req , file , cb){
        cb(null , uuidv4()+'-'+Date().now()+path.extname(file.originalname)) ;
    }
});