import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { imageTobase64 } from '../utility/imageTobase64';
import SummaryApi from '../../common';
import toast from 'react-hot-toast';

const Newproduct = () => {
  const [data,setdata]=useState({
    name:'',
    auther:'',
    category:'',
    image:'',
    price:'',
    description:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setdata((prev)=>{
     return{
      ...prev,
      [name] : value
     }
    })
  }
   const uploadImage=async(e)=>{
      const data=await imageTobase64(e.target.files[0])
     

      setdata((prev)=>{
        return{
          ...prev,
          image:data
        }
      })
   }
   
   
   const handleSubmit =async(e)=>{
    e.preventDefault();
    console.log(data)

    const {name,image,auther,category,price}=data

   if(name && image && category && auther && price){
 const response = await fetch(SummaryApi.Uploadproduct.url,{
        method :SummaryApi.Uploadproduct.method,
        credentials:'include',
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  const dataApi=await response.json();
   
  if(dataApi.success){
    toast.success(dataApi?.message)
  }
  if(dataApi.error){
    toast.error(dataApi?.message)
  }

 setdata(()=>{
  return{
    name:'',
    auther:'',
    image:'',
    price:'',
    category:'',
    description:''
  }
 })
   }
   else{
    toast("Enter required fileds");
   }
   }
 
  return (
    <div className=' p-4'>
     <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input type={'text'} name='name' className='bg-slate-200 p-1 my-1' onChange={handleChange} value={data.name}></input>
      
      <label htmlFor='auther'>Auther</label>
        <input type={'text'} className='bg-slate-200 p-1 my-1'name='auther' onChange={handleChange} value={data.auther}/>
        <label htmlFor='categort'>Category</label>
      <select className='bg-slate-200 p-1 my-1' name="category" id='category'onChange={handleChange} value={data.category}>
      <option value={"other"}>select category</option>
      <option value={"Storybook"}>Storybook</option>
        <option  value={"Mythologybook"}>Mythologybook</option>
        <option value={"Knowledgebook"}>Knowledgebook</option>
        <option value={"Horrorbook"}>Horrorbook</option>
        <option value={"Healthbook"}>Healthbook</option>
      </select>
      <label htmlFor="image">Image
      <div className="h-40 w-full bg-slate-300 rounded flex items-center justify-center cursor-pointer">
        {
          data.image ?  <img src={data.image} className='h-full'/> : <span className='text-4xl'><IoCloudUploadOutline/></span>
        }
       
        
        <input type={"file"} id="image" accept="image/*"onChange={uploadImage} className='hidden'></input>
      </div>
      </label>
      <label htmlFor='price' className='my-1'>Price</label>
      <input type={'text'} className='bg-slate-200 p-1 my-1'name='price' onChange={handleChange} value={data.price}/>

      <label htmlFor='description'>Description</label>
      <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name="description"onChange={handleChange} value={data.description}></textarea>
      
      <button className='bg-red-600 hover:bg-red-700 py-1 px-6 text-white mt-3 rounded'>Save</button>
     </form>
    </div>
  )
}

export default Newproduct

