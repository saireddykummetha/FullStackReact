import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Review from './Review';

const Menu = () => {
    const {filterby}=useParams();
     const productData=useSelector(state=>state.product.productList)
     const productDisplay=productData.filter(el=>el._id===filterby)[0]
    console.log(productDisplay)
  return (
     <div>
     <div className='w-full max-w-4xl mt-10 m-auto bg-white  max-h-full flex md:flex md:auto'>
      <div className='w-2/2  overflow-hidden m-auto'>
        <img src={productDisplay.image} className='hover:scale-105 m-auto transform-all w-50  h-50'/>      
      </div>
      <div>
      <h3 className='font-semibold text-slate-600 capitalize text-lg mt-3 text-2xl md:text-3xl px-5'>{productDisplay.name}</h3>
        <h3 className='font-semibold text-slate-600 capitalize text-lg mt-3 text-xl md:text-xl px-5'>Auther:{productDisplay.auther}</h3>
    <p className=' text-slate-500 font-medium px-5 pt-3'>{productDisplay.category}</p>
    <p className=" font-bold px-3"><span className="text-red-600 px-3">₹</span>{productDisplay.price}</p>
    
    <div className='px-5 text-medium'>
        Description:
        <p className='text-slate-500 mb-2'>{productDisplay.description}</p>
     </div>
     <Review/>
    <div className='text-center py-5 px-30'>
    <button className='bg-yellow-400 hover:bg-yellow-500 w-25 cursor-pointer h-8 rounded-full'>Addcart</button>    
     </div>
     
     </div>
     </div>
    </div>
  )
}

export default Menu
