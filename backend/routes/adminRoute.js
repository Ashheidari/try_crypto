const express = require('express');

const router = express.Router()



router.get('/users',(req,res,next)=>{
    res.json({users:[{user1:'user1'},{user2:'user2'},{user3:'user3'}]});
})

router.get('/subsc',(req,res,next)=>{
    res.json({subsc:[{sub1:'sub1'},{sub2:'sub2'},{sub3:'sub3'}]});
})


module.exports=router