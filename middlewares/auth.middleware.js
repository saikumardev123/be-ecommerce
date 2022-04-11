var jwt = require('jsonwebtoken');

exports.authMiddleware = function(req,res,next){
    console.log(req.headers);

    if(req.headers.authorization){

        let token = req.headers.authorization.split(" ")[1];

         if(token){
              jwt.verify(token,'dl',(err,result) => {
                  if(err){
                    console.log(err.message);
                    res.status(401).send(err.message);
                  }
                   
                  if(result){
                        next();
                  }
                   
              })
         }
    }
    else {
        console.log("Unauthorized");
        res.send("unauthorized!!");
    }
}

