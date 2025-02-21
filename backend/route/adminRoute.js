const express=require('express');
const route=express.Router();
const {login, signup}=require('../controller/adminController')
route.post('/signup',signup)
route.post('/login',login)

module.exports=route