const bcrypt =require("bcryptjs");
const userModel = require("../Models/Usermodel.jsx");
const jwt = require('jsonwebtoken');
async function UserSigninController(req,res){
try{
  const {email, password}=req.body;
       if(!email){
        throw new error("please provide email")
      }
      if(!password){
        throw new error("please provide password")
      }

      const user=await userModel.findOne({email})
      if(!user){
        throw new Error("user not found")
      }
      const checkpassword=await bcrypt.compare(password,user.password)

      if(checkpassword){
        const tokendata={
          _id:user._id,
           email:user.email,
        }
        const token=await jwt.sign(tokendata,process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});
        
        const tokenOption={
            httpOnly:true,
            secure:true,
        }
        res.cookie("token",token,tokenOption).status(200).json({
            message:"Login Successfully",
            data:token,
            success:true,
            error:false,
        })
      }else{
        throw new Error("please check password")
      }
   }catch(err){
       res.json({
        message:'User not exits',
        error:true,
        success:false,
       })
    }
}

module.exports=UserSigninController;