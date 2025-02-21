const mongoose=require('mongoose');

const teacherSchema=mongoose.Schema({
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
    qualification:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        // required:true
    },

})
module.exports=mongoose.model("teacher",teacherSchema);