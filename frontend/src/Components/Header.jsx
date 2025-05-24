import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../../common';
import toast from 'react-hot-toast';
import { setUserdetails } from '../../store/UserSlice';
const Header = () => {
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(state=>state?.user?.user)
  console.log("user header",user)
  
  const [showmenu,setshowmenu]=useState(false);
  const handleshowmenu=()=>{
    setshowmenu(preve=>!preve)
  }
  

  const handleSearch = (e)=>{
        const { value } = e.target

        if(value){
          navigate(`/search?q=${value}`)
        }
        else{
          navigate("/search")
        }
      }
  const handleLogout= async()=>{
     const fetchData = await fetch(SummaryApi.Logout.url,{
          method : SummaryApi.Logout.method,
          credentials:"include",
  })
  const data=await fetchData.json()
  if(data.success){
    toast.success(data.message);
    dispatch(setUserdetails(null))
  }
  if(data.error){
     toast.error(data.message);
  }
}
  return (
   <header className='h-16 shadow-md bg-white fixed w-full z-40 md:px-4'>
    <div className='ml-5 mt-5 flex justify-between '>
      <Link to={'/'}className='font-semibold text-xl cursor-pointer'>BOOKSTORE</Link>
    
      <div className='hidden lg:flex items-center w-full ml-60  justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
            <input type='text' placeholder='What are you looking for? 'className='w-full outline-none px-2' onClick={handleSearch}/>
            <div className='text-lg min-w-[50px] h-9 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <IoSearch />               
        </div>
      </div>
    {/* <button className='h-10 w-20 bg-red-600 cursor-pointer rounded-3xl text-white'>Login</button> */}
    
   
    <div className='text-slate-500' onClick={handleshowmenu}>
      <div className='text-3xl cursor-pointer mr-5 ' >
        {
          user ?.image ? (
            <img src={user?.image} alt={user?.name} className='w-9 h-9  ml-80 rounded-full'/>
          ) : (<FaRegUserCircle className='ml-80 '/> )
        }
       
      </div>
       {
         showmenu &&  (
         <div className='bg-white absolute right-20 shadow drop-shadow-md py-1 px-2 mt-3 flex flex-col'>
        { user.email === 'sai@gmail.com' && 
        (<Link to={'newproduct'} className='cursor-pointer '>New Product</Link>)
        }
        </div>
       )}
     
    </div>
   
      {
          user?._id ? (
            <button className='h-9 w-20 justify-center text-center bg-red-600 hover:bg-red-700 cursor-pointer rounded-3xl text-white' onClick={handleLogout}>Logout</button>
          ):(
           <Link to={'login'} className='h-9 w-20 text-center justify-center p-1 bg-red-600 hover:bg-red-700 cursor-pointer rounded-3xl text-white '>Login</Link>
          )
        } 
     
    </div>
   </header>
  )
}

export default Header
