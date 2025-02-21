const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true,
       },
       middlename:{
       type:String
       },
       lastname:{
           type:String,
           required:true
       },
       currentqualification:{
           type:String,
           required:true,
           enum:["VIII","IX","X","XI","XII"]
       },
       subject:{
           type:String,
           // required:true
       },
})