const userModel = require("../Models/Usermodel.jsx");
const bcrypt =require("bcryptjs");
async function UserSignupController(req,res){
    try{
      const{email,password,name}=req.body;
        const user=await userModel.findOne({email})
        
       if(user){
         throw new error("Already user exits")
       }

      if(!email){
        throw new error("please provide email")
      }
      if(!password){
        throw new error("please provide password")
      }
      if(!name){
        throw new error("please provide name")
      }
       
      const salt = bcrypt.genSaltSync(10);
       const hashPassword =await bcrypt.hashSync(password, salt);

       if(!hashPassword){
        throw new Error("somthing went wrong")
       }

       const payload={
        ...req.body,
        role:"GENERAL",
        password:hashPassword
       }

      const userData=new userModel(payload)
      const saveUser=await userData.save();
      res.status(201).json({
        data:saveUser,
        success:true,
        error:false,
        message:"user create succesfully"
      })

    }catch(err){
       res.json({
        message:'User already exits',
        error:true,
        success:false,
       })
    }
}

module.exports=UserSignupController;