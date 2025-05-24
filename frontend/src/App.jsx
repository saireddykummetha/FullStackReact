
import './App.css'
import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import SummaryApi from '../common'
import Context from '../Context'
import { useDispatch } from 'react-redux'
import { setUserdetails } from '../store/UserSlice'
import { setallproducts} from '../store/ProductSlice'
import { allReview } from '../store/AllReview'


function App() {

  const dispatch=useDispatch();
  const fechUserdetails=async()=>{
   const dataResponse=await fetch(SummaryApi.User.url,{
        method : SummaryApi.User.method,
        credentials:"include",
      })
      const dataApi=await dataResponse.json();
      if(dataApi.success){
         dispatch(setUserdetails(dataApi.data))
      }
      
  }

    const products=async()=>{
   const response=await fetch(SummaryApi.Allproducts.url,{
        method : SummaryApi.Allproducts.method,
        credentials:"include",
      })
      const data=await response.json();
      if(data.success){
         dispatch(setallproducts(data.data))
      }
      
  }

 const AllReview=async()=>{
   const response=await fetch(SummaryApi.Allreview.url,{
        method : SummaryApi.Allreview.method,
        credentials:"include",
      })
      const data=await response.json();
      if(data.success){
         dispatch(allReview(data.data))
      }
      
  }

  useEffect(()=>{
    fechUserdetails();
    products();
    AllReview();
  },[]);
  

  return (
    <>
    <Context.Provider value={{
      fechUserdetails //user details fetch
    }}>
    <Toaster/>
    <Header/>
    
    <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
      <Outlet/>
    </main>
    </Context.Provider>
    </>
  )
}

export default App
