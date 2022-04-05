var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    username: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    emailId: {
        type:String,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model('user',userSchema);