const mongoose=require('mongoose')
const schema = mongoose.Schema
const myschema= new schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    postnumber:{
        type:Number,
        required:false
    },
    followingnumber:{
        type:Number,
        required:false
    },
    followernumber:{
        type:Number,
        required:false
    },
    post:{  
        type:String,
        requied:false

    }
},{timestamps:true}) 
const Model=mongoose.model('Chitchat',myschema)
module.exports=Model