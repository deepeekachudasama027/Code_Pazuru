const jwt =require( "jsonwebtoken");

exports.generateToken = (req,next) => {
 try{
     console.log(req,body)
     id=req.body._id;
    return jwt.sign({id  }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
 } 
 catch{
     next(error)
 }
};

