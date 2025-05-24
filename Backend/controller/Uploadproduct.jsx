const Productmodel = require("../Models/Productmodel.jsx");
async function uploadProduct(req,res){

    try{
     const UploadProduct=new Productmodel(req.body)
     const saveproduct=UploadProduct.save();
     res.status(200).json({
        message:"Product upload successfully",
         error:false,
         success:true,
        data:saveproduct
     })
    }catch(err){
       res.json({
        message:'product is not exits',
        error:true,
        success:false,
       })
    }
}
module.exports=uploadProduct