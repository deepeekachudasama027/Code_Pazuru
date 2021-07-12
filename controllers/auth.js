const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Ques = require("../models/ques");

// @desc    Login user
var email =""
var password =""
exports.login = async (req, res, next) => {
  
   email =req.body.email;
  password=req.body.password;
 
   // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc    Register user
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};

var level,score,username,element
  exports.getCode = async (req, res, next) => {  
    try {
      User.find({email},{ _id:0,level: 1,score:1,username:1}).then(user => {
        level =user[0].level
        score=user[0].score
        username=user[0].username
      Ques.find({level},{_id:0, level: 1, code: 1}).then(element => {
        ele={
          element:element[0],
          score:score,
          username:username
        }
      
        return res.json(ele);
       
        })})
    } catch (err) {
      next(err);
    }
  };
  exports.check = async (req, res, next) => {  
    try {
      User.find({email},{ _id:0,level: 1,score:1,username:1}).then(user => {
         level =user[0].level
         score =user[0].score
         username=user[0].username
      Ques.find({level},{ _id:0,level: 1, code: 1,order:1}).then(elements=> {
        if(JSON.stringify(req.body.items)==JSON.stringify(elements[0].order))
        {
          level++;
          score=score+100
          User.findOneAndUpdate({email},{level:level,score:score},{new:true}).then(
          Ques.find({level},{ _id:0,level: 1, code: 1}).then(element => {
            ele={
              element:element[0],
              score:score,
              username:username
            }
      
           return res.json(ele);
          
          })
        )
        }
        else{
          ele={
            element:elements[0],
            score:score,
            username:username
          }
      return res.json(ele);}
        }) })
    } catch (err) {
      next(err);
    }
  };
