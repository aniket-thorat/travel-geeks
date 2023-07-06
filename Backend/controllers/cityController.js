const mongoose = require('mongoose');
const City = require('../models/cityModel');
const asyncHandler = require('express-async-handler');

const router = require('express').Router() ;
const multer = require('multer') ;
const {v4 : uuidv4 } = require('uuid') ;
const path = require("path") ;


const store = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdir(path, { recursive: true}, function (err) {
            if (err) return cb(err);
            cb(null,  "uploads/photos");
          });
    },
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('_');
        cb(null, name + '-' + Date.now());
    }
});
const upload = multer({ storage: store }).single('file');

const addExperience = (req, res) => {

    const url = req.protocol + '://' + req.get("host");
    let city = new City(
        {
            city_name: req.body.city_name,
            short_desc: req.body.short_desc,
            img: url + '/uploads/photo/' + req.file.filename
        }
    );
    console.log(city) ;
    city.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while creating the user."
            });
        });

}
module.exports = { addExperience };