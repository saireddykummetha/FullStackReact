const Productmodel = require("../Models/Productmodel.jsx");

async function Allproducts(req,res){
     try{ 
        const product = await Productmodel.find(req.body)
        res.json({
            data : product,
            message : "Ok",
            success : true,
            error : false
        })

        
    }catch(err){
        res.json({
            message : err?.message  || err,
            error : true,
            success : false
        })
    }
}
module.exports=Allproducts;