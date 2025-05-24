const express=require('express');

const router=express.Router();

const UserSignupController=require('../controller/UserSingnup.jsx');
const UserSigninController = require('../controller/UserSignin.jsx');
const UserDetailscontroller = require('../controller/UserDetails.jsx');
const UserLogout = require('../controller/UserLogout.jsx');
const authToken = require('../Middleware/authToken.jsx');
const uploadProduct = require('../controller/Uploadproduct.jsx');
const AllProducts = require('../controller/Allproducts.jsx');
const  SearchProduct  = require('../controller/Searchproduct.jsx');
const Addreview = require('../controller/Addreview.jsx');
const Allreview = require('../controller/Allreview.jsx');


//users
router.post('/signup',UserSignupController)
router.post('/signin',UserSigninController)
router.get('/user-details',authToken,UserDetailscontroller)
router.get('/userlogout',UserLogout)

//search product
router.get('/search',SearchProduct)

//review
router.post('/menu',Addreview)
router.get('/allreview',Allreview)

//upload products
router.post('/uploadProduct',authToken,uploadProduct)

//All products
router.get('/allproducts',AllProducts)

module.exports=router;