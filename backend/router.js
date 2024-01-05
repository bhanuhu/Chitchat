const express= require('express')
const route=express.Router()
const mongoose=require('mongoose')
const Model=require('./schema/abcModel')

route.post("/signup", async (req,res)=>{
    const {email, password ,firstname, lastname}=req.body
    let followingnumber=0,followernumber=0,postnumber=0;
    try{
        const abc=  new Model({email, password ,firstname, lastname,followingnumber,followernumber,postnumber})
        const abcd =await abc.save()
        console.log(email,password,firstname,lastname)
        res.status(200).json({"Details":"Recieved"})
    }catch(error){  
       
        res.status(404).json({error:error.message})
        
    }
    
    // res.status(201).json({msg:"post"})
})
route.post("/signin", async (req,res)=>{
    const email = req.body.email
    const password=req.body.password
    console.log(email)
    console.log(password)
    Model.findOne({email:email,password:password}   )
    .then((docs)=>{
        if (docs!=null){
            res.status(201).json("signedin")
            
        }
        else{
            
            res.status(203).json({error:"email or password not found"})
        }
        
    })
    .catch((error)=>{  
       
        res.status(408).json({error:error.message})
        
    })
    
    // res.status(201).json({msg:"post"})
})

module.exports=route