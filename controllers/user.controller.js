var UserModel = require('../models/user.model');
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