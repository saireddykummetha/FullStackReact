import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Homecard = ({image,category,price,name,loading,id}) => {

   
  return (
    <div className="bg-white p-2 pb-30  shadow-md min-w-[150px] min-h-[200px] ">
      {
        name ? (
      <>
      <Link to={`menu/${id}`}>
      <div className="w-40 h-40">
      <img src={image} className="w-full h-full"/>
      <h2 className="font-semibold  text-slate-700 mt-2 text-lg mb-1 capitalize">{name}</h2>
      <h2 className=" font-semibold"><span className="text-red-700">₹</span> {price}</h2>
      <p className="font-semibold text-center text-slate-700 ">{category}</p>
     
     </div>
     </Link>
        </>)
        :
        <div className='flex justify-center items-center h-full text-center mt-10'>
           <p>{loading}</p>
        </div>
      }
    
    </div>
  )
}

export default Homecard
