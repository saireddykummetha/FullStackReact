const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    review:String,
 
})
const productreview=mongoose.model('Review',productSchema); 

module.exports=productreview;