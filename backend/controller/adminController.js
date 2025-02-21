const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const adminmodel=require('../model/admin')
const ErrorHandler=require('../config/ErrorHandler')


const signup=async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(email);
    
    try {
        const existingAdmin=await adminmodel.findOne({email});
    
        if(existingAdmin){
         next(new ErrorHandler("admin already exist",409));
        }else{
            bcrypt.genSalt(10,function(err,salt){
                bcrypt.hash(password,salt,async function(err,result){
                const admin= await adminmodel.create({
                    email,password:result
                })
                })
            })
            res.json({
                success:true,
                message:"user created successfully"
            })
        }
    } catch (error) {
        next(new ErrorHandler(error.message,500))
    }
   
}
const login=async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(req.body);

    
   try {
    
    
    const admin=await adminmodel.findOne({email});
    if(!admin){
     next(new ErrorHandler("wrong credentials",400));
    }else{
       bcrypt.compare(password,admin.password,function(err,result){
        if(result){
            const token=jwt.sign({email},'secret');
           res.json({
            success:true,
            message:"Signed in successfully",
            token
           })
        }else{
            res.status(400).json({
                success:false,
                message:"unable to login",

            })
        }
       })
    }
   } catch (error) {
    next(new ErrorHandler(error.message,500))
   }
}
module.exports={login,signup};