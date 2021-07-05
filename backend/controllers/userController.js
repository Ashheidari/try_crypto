const bcrypt = require('bcryptjs')
const HttpError = require('../models/http-error');
const User = require('../models/User');
const {validationResult} = require('express-validator')


const signupUser = async (req, res, next)=>{
    // handle input errors if any 
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        const error = new HttpError(validationErrors.errors[0].msg,422)
        return next(error)
    }
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    // check user exist or not 
    let existingUser;
    try {
        existingUser = await User.findOne({email:email});
        
    } catch (err) {
        const error = new HttpError('signup failed, please try again', 500)
        return next(error)
    }
    if (existingUser){
        const error = new HttpError ('User exist already, please login instead',422)
        return next(error)

    }
    // hash user password 
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password,12)
    } catch (err) {
        const error = new HttpError('Could not create user, please try again.',500)
        return next(error)
    }
        
    // store user in database 
    const createdUser = new User({name,lastname,email,password:hashedPassword});
    try {
        await createdUser.save()
    } catch (err) {
        const error = new HttpError('signup failed, please try again', 500)
        return next(error)        
    }

    res.status(201).json({userId:createdUser.id,email:createdUser.email});



}
const loginUser = async (req, res, next)=>{
    // handle input errors if any 
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        const error = new HttpError(validationErrors.errors[0].msg,422)
        return next(error)
    }

    const email = req.body.email;
    const password = req.body.password;
    let existingUser;
    // check if user exist or not 
    try {
        existingUser = await User.findOne({email:email});
    } catch (err) {
        const error = new HttpError('logining in failed, please try again.', 500)
        return next(error);      
    }
    if(!existingUser){
        const error = new HttpError('invalid credential, could not log you in.',403)
        return next(error);
    }
    // check if the password is valid or not 
    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password,existingUser.password);
    } catch (err) {
        const error = new HttpError('logining in failed, please try again.', 500)
        return next(error);         
    }
    if (!isValidPassword){
        const error = new HttpError('invalid credential, could not log you in.',403)
        return next(error);       
    }
    res.status(200).json({userId:existingUser.id,email:existingUser.email,message:'user login successfuly'})
    

}
const payUser = (req, res, next)=>{



}







exports.signupUser = signupUser;


exports.loginUser = loginUser;
exports.payUser = payUser;