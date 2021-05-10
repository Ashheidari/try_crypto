const express = require('express');
const userRouter = require('./routes/userRoute');
const adminRouter = require('./routes/adminRoute');

const app = express();

app.use(express.json());


app.use('/api/v1',userRouter);

app.use('/api/v1/admin',adminRouter);





app.use((error,req,res,next)=>{
    if (res.headerSent){
        next(error)
    }
    res.status(error.code ||500)
    res.json({message:error.message || 'an unknown error occured'})
    
})

app.listen(5000)