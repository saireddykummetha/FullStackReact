
const Review = require("../Models/Review.jsx");
async function Addreview(req,res){

    try{
     const review=new Review(req.body)
     const saveproduct=review.save();
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
module.exports=Addreview