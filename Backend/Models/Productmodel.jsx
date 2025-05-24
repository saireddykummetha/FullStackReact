const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:String,
    auther:String,
    image:String,
    category:String,
    price:String,
    description:String,
})
const Productmodel=mongoose.model('books',productSchema); 

module.exports=Productmodel;