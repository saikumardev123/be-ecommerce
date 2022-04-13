var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema= new Schema({

      productId: {
          type:String,
          required:true,
          unique:true
      },

      name: {
          type:String,
          required:true,
          unique:true,
          minlength:30,
          maxlength:1000
      },

       pricingOptions: {
           type:Array
       }
,
     availableOffers: {
            type:Array
      },
      Size: {
          type:Array
      },
      highLights: {
          type:Array
      },
      description:{
          type:String
      },
      specifications: {
          type:Array
      }

       })