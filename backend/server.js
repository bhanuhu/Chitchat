const express = require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const bodyParser= require("body-parser");
const rout=require('./router')
const app = express()
app.use(express.json())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use("/api",rout)

mongoose.connect('mongodb+srv://bhanuaggarwal47:DLYtCKURSs7Xk5r3@cluster0.tnqheg0.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(5050,()=>{
        console.log("listenig at http://localhost:5050/api/")
        
    })
    
})
.catch((error)=>{
    console.log(error)
 })



