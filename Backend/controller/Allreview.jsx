const productreview = require("../Models/Review.jsx");


async function Allreview(req,res){
     try{ 
        const product = await productreview.find(req.body)
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
module.exports=Allreview;