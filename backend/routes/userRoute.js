const express = require('express');

const router = express.Router();


router.post('/login',(req,res,next)=>{
    
    res.json({message: "login route works fine"})
});
router.post('/signup',(req,res,next)=>{
    res.json({message: "signup route works fine"})
});
router.post('/pay',(req,res,next)=>{
    res.json({message: "pay route works fine"})
});


module.exports= router