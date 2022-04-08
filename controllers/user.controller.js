var UserModel = require('../models/user.model');
var jwt = require('jsonwebtoken');
exports.register = (req,res) => {
    var body = req.body;
    
     var userDocument=new UserModel(body);
     userDocument.save((err,doc)=>{

         if(err){
             console.log(err);
             res.send(err.message);
         }
         else{
             console.log(doc);
             if(doc){
                 res.send("user registered successfully");
             }
         }
     })
}

exports.login = (req, res) =>{

    var body = req.body;
    var emailId = body.emailId;
    var password = body.password;
    console.log(emailId);

    UserModel.find({emailId:emailId},(err,result) => {
         if(err){
             res.send(err.message)
         }
         if(result.length > 0){
             var user = result[0];
              if(user.password == password){
                  
                var _id= user.id;
                  var token = jwt.sign( {payload:_id},'dl');
                   res.send({token:token, isLoggedIn: true});
              }
              else
              {
                  res.send("password incorrect");
              }
         }
         else
         {
             res.send("this email is not registered with us!!");
         }
          
    })


}