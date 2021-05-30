const HttpError = require('../models/http-error');
const User = require('../models/User');
const {validationResult} = require('express-validator')


const signupUser = (req, res, next)=>{
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        const error = new HttpError(validationErrors.errors[0].msg,422)
        throw error
    }
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    

    // const user =new User({name,lastname,email,password})
    // user.save().then(result=>{
    //     console.log('user saved sucssesfuly')
    //     res.json(result);
    // }).catch(err=>{
    //     next(err);
    // })
    

}
const loginUser = (req, res, next)=>{



}
const payUser = (req, res, next)=>{



}







exports.signupUser = signupUser;


exports.loginUser = loginUser;
exports.payUser = payUser;