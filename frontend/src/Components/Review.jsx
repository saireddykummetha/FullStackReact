import React, { useState } from 'react'
import SummaryApi from '../../common';


const Review = () => {

    const [data,setdata]=useState({
        review:"",
    });
      const handleChange=(e)=>{
    const {name,value}=e.target
    setdata((prev)=>{
     return{
      ...prev,
      [name] : value
     }
    })
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    console.log(data)

    const {review}=data

   if(review){
 const response = await fetch(SummaryApi.Review.url,{
        method :SummaryApi.Review.method,
        credentials:'include',
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  const dataApi=await response.json();
   

 setdata(()=>{
  return{
 review:"",
  }
 })
}
}


  return (
    <>
    <form onSubmit={handleSubmit}> 
    <div className='border ml-5 rounded w-50'>
      <input type={'text'} placeholder="Write Review" className='w-50 p-1 h-5 outline-none my-1'name='review' onChange={handleChange}  value={data.review}/>
    </div>
    <button className='bg-yellow-400 hover:bg-yellow-500  ml-5 py-1 px-4  mt-1 rounded'>Save</button>
    </form>
    
    </>
    
  )
}

export default Review
