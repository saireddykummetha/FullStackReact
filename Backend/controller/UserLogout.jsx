
async function userLogout(req,res){

    try{
        res.clearCookie("token")

        res.json({
         message:"Logout successfully",
         error:false,
         success:true,
         data:[],
        })
    }catch(err){
       res.json({
        message:'User already exits',
        error:true,
        success:false,
       })
    }
}
module.exports=userLogout;