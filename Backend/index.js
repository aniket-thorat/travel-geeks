const express = require('express') ;
const app = express() ;
const cors = require('cors') ;
const connectDB = require('./models/db') ;
const User = require('./models/usermodel')
const { default: mongoose } = require('mongoose');
const {createUser ,login_user} = require('./controllers/userController')
const {addExperience} = require('./controllers/cityController') ;
const PORT = 8000 ;
connectDB() ;
app.use(express.json()) 
app.use(cors()) ;

app.get('/' , (req , res)=>{
    res.send('Hello from backend') ;
})

app.get('/home' , (req , res)=>{
    res.send(d) ;
})

app.post("/signup" , createUser);
app.post('/login' , login_user) ;
app.post('/add' , addExperience) ;

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`) ; 
})

const d = [
    {
        "name" : "Aniket" ,
        "city":"Pune" ,
        "short" : "Pune several times.[24] Pune is also considered to be the cultural and educational capital of Maharashtra.[25] Along with the municipal corporation area of PCMC, PMC and the three cantonment towns of Camp, Khadki, and Dehu Road, Pune forms the urban core of the eponymous Pune Metropolitan Region (PMR)"
    },
    {
        "name" : "Aniket" ,
        "city":"Delhi" ,
        "short" : "Pune several times.[24] Pune is also considered to be the cultural and educational capital of Maharashtra.[25] Along with the municipal corporation area of PCMC, PMC and the three cantonment towns of Camp, Khadki, and Dehu Road, Pune forms the urban core of the eponymous Pune Metropolitan Region (PMR)"
    },
    {
        "name" : "Aniket" ,
        "city":"Pune" ,
        "short" : "Pune several times.[24] Pune is also considered to be the cultural and educational capital of Maharashtra.[25] Along with the municipal corporation area of PCMC, PMC and the three cantonment towns of Camp, Khadki, and Dehu Road, Pune forms the urban core of the eponymous Pune Metropolitan Region (PMR)"
    },
    {
        "name" : "Aniket" ,
        "city":"Pune" ,
        "short" : "Pune several times.[24] Pune is also considered to be the cultural and educational capital of Maharashtra.[25] Along with the municipal corporation area of PCMC, PMC and the three cantonment towns of Camp, Khadki, and Dehu Road, Pune forms the urban core of the eponymous Pune Metropolitan Region (PMR)"
    }
]