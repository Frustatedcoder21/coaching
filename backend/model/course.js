const mongoose=require('mongoose');

const courseSchema= mongoose.Schema({
    image:{
        type:String,
        default:""
    },
    name:{
        type:String,
        required:true       
    },
    price:{
        type:String,
    },
    startdate:{
        type:Date,
        required:true
    },
    enddate:{
        type:Date,
    },
    description:{
        type:String
    },
    courseFor:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model("course",courseSchema);