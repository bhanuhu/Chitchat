const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const bodyParser= require("body-parser");
const rout=require('./router')
const abc=process.env.MONGO_URI
const app = express()
app.use(express.json())

app.use("/",rout)

mongoose.connect(abc)
.then(()=>{
    app.listen(5050,()=>{
        console.log("listenig at http://localhost:5050/api/")
        
    })
    
})
.catch((error)=>{
    console.log(error)
 })



