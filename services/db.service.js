var mongoose = require('mongoose');

exports.connectToDB = (mongoURL) => {
    console.log("connecting to db....")
    mongoose.connect(mongoURL,err =>{
          
         if(err){
             console.log(err.message);
         }
         else
         {
             console.log("connected to DB");
         }

    })

}