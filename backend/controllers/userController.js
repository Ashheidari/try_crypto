const HttpError = require('../models/http-error');
const User = require('../models/User');


const signupUser = (req, res, next)=>{

    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    

    const user =new User({name,lastname,email,password})
    user.save().then(result=>{
        console.log('user saved sucssesfuly')
        res.json(result);
    }).catch(err=>{
        next(err);
    })
    

}
const loginUser = (req, res, next)=>{



}
const payUser = (req, res, next)=>{



}







exports.signupUser = signupUser;


exports.loginUser = loginUser;
exports.payUser = payUser;