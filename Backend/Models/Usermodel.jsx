const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
   name:String,
   email:String,
   password:String,
   confirmpassword:String,
   category:String,
   image:String
})
const userModel=mongoose.model('users',userSchema); 

module.exports=userModel;
