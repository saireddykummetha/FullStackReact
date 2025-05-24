const Productmodel = require("../Models/Productmodel.jsx");

async function searchproduct(req,res){
    try{
       const query=req.query.q
       const regex=new RegExp(query,'i','g')
       const product=await Productmodel.find({
           "$or":[
            {
               name:regex
            },
            {
               category:regex
            }
           ]
       })

       res.json({
         data:product,
         message:"search product list",
         error:false,
         success:true,
       })
    }catch(err){
       res.json({
        message:'product is not exits',
        error:true,
        success:false,
       })
    }
}
module.exports=searchproduct;