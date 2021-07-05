const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRoute");
const HttpError = require("./models/http-error");

const app = express();

//parse Json body
app.use(express.json());

// handle CORS ERROR
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTION"
  );
  res.setHeader("X-Powered-By", "");
  next();
});

app.use("/api/v1", userRouter);

app.use("/api/v1/admin", adminRouter);

// handle not found route
app.use((req, res, next) => {
  const error = new HttpError("could not find this route", 404);
  throw error;
});

//error handling midlleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    next(error);
  }
  res.status(error.code || 500);
  console.log(error)
  res.json({ message: error.message || "an unknown error occured" });
});

//connect to database
mongoose
  .connect(
    "mongodb+srv://arashheidari:vzd67zE5vR1Y3aGe@cluster0.rnyri.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(5000);
    console.log("connect to database sucssesfuly");
  })
  .catch((err) => {
    console.log(err);
  });
