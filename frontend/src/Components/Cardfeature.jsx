import React from 'react'
import { Link } from 'react-router-dom'

const Cardfeature = ({image,name,price,category,loading,id}) => {
  return (
    <>
    <div className="bg-white p-2 pb-37 shadow-md min-w-[180px] min-h-[200px] ">
      {
        name ? (
        <>
        <Link to={`menu/${id}`}>
         <div className="w-40 h-40">
          <img src={image} className="w-full h-full"/>
          <h2 className="font-semibold  text-slate-700 mt-2 text-lg capitalize">{name}</h2>
          <h2 className=" font-semibold"><span className="text-red-700">₹</span> {price}</h2>
          <p className="font-semibold text-center text-slate-700 ">{category}</p>
          <div className='bg-yellow-400 text-center mt-1 justify-center cursor-pointer'>Addcart</div>
         </div>
         </Link>
        </>
        ):
        <div className='flex justify-center items-center h-full text-center mt-10'>
           <p>{loading}</p>
        </div>       
      }  
    </div>
    
    </>
    
  )
}

export default Cardfeature

