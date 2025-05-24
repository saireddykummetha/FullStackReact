import React from 'react'

const Seacrchbar = ({image,category,price,name,loading,id}) => {
  
  return (
     <div className="  shadow-md ">
      {
        name ? (
      <>
      <Link to={`menu/${id}`}>
      <div className="w-40 h-40">
      <img src={image} className="w-full h-full"/>
      <h2 className="font-semibold  text-slate-700 mt-2 text-lg capitalize">{name}</h2>
      <h2 className=" font-semibold"><span className="text-red-700">₹</span> {price}</h2>
      <p className="font-semibold text-center text-slate-700 ">{category}</p>

     </div>
     </Link>
        </>)
        :
        <div className='flex justify-center items-center h-full text-center'>
           <p>{loading}</p>
        </div>
      }
    
    </div>
  )
}

export default Seacrchbar