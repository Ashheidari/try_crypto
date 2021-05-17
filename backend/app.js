const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRoute");

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);

app.use("/api/v1/admin", adminRouter);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "an unknown error occured" });
});

mongoose
    .connect(
        "mongodb+srv://arashheidari:vzd67zE5vR1Y3aGe@cluster0.rnyri.mongodb.net/test?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology:true }
    )
    .then((result) => {
        
        app.listen(5000);
        console.log('connect to database sucssesfuly')

    }).catch((err)=>{
        console.log(err)
    });

