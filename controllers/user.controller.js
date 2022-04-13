var UserModel = require('../models/user.model');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
exports.register = (req,res) => {
    var body = req.body;
     var password =  req.body.password;
     var salt = bcrypt.genSaltSync(10);
     var hashedPassword = bcrypt.hashSync(password,salt);
     console.log("hashedPassword",hashedPassword);
   body.password = hashedPassword;
   console.log("body", body);
     var userDocument=new UserModel(body);
     userDocument.save((err,doc)=>{

         if(err){
             console.log(err);
             res.send(err.message);
         }
         else{
             console.log(doc);
             if(doc){
                var _id= doc.id;
                var token = jwt.sign( {payload:_id},'dl');
                 res.send({token:token, isLoggedIn: true});
                // res.send("user registered successfully");
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
              if(bcrypt.compareSync(password,user.password)){
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

exports.changePassword = (req,res) => {

    var body = req.body;
    var emailId = body.emailId;
    var currentPassword = body.currentPassword;
    var newPassword = body.newPassword;

    UserModel.find({emailId:emailId},(err,result) => {
        if(err){
            res.send(err.message)
        }
        if(result.length > 0){
            var user = result[0];
             if(user.password == currentPassword){
                 
               var _id= user.id;
                 
                if(_id){
                    UserModel.findOneAndUpdate({emailId:emailId},{password: newPassword},(err,doc,response) =>{
                           if(err){
                               res.send(err.message);
                           }
                           if(doc){
                               console.log("doc", doc);
                               res.send("Password updated successfully!");
                           }
                    })
                }
                else {
                    res.send("Current password is incorrect!!");
                }
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