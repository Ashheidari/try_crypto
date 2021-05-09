const express = require('express');
const userRouter = require('./routes/userRoute');
const adminRouter = require('./routes/adminRoute');

const app = express();

app.use(express.json());


app.use('/api/v1',userRouter);

app.use('/api/v1/admin',adminRouter);





app.listen(5000)