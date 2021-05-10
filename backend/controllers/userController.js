const HttpError = require('../models/http-error');


const signupUser = (req, res, next)=>{

    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const err = new HttpError('ridam',666)
    throw err;


}
const loginUser = (req, res, next)=>{



}
const payUser = (req, res, next)=>{



}







exports.signupUser = signupUser;


exports.loginUser = loginUser;
exports.payUser = payUser;