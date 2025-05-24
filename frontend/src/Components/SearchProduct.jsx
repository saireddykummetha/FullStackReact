import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../../common'
import Seacrchbar from './Searchbar';

const SearchProduct = () => {

  const [data,setdata]=useState([]);
  const [loading,setloading]=useState(false);
  const query=useLocation()
  console.log("query",query.search)
  const fetchproduct=async()=>{
    setloading(true);
    const response=await fetch(SummaryApi.Searchproduct.url+query.search)
    const dataResponse=await response.json();
    setloading(false);
    setdata(dataResponse.data);
  }
  useEffect(()=>{
    fetchproduct();
  },[query]);
  return (
    <div className='container mx-auto p-4'>
      {
        loading && (
          <p className='text-lg text-center'>Loading ...</p>
        )
      }
 
      <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

      {
        data.length === 0 && !loading && (
           <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
        )
      }


      {
        data.length !==0 && !loading && (
          <Seacrchbar loading={ loading} data={data}/> 
        )
      }

    </div>
  )
}

export default SearchProduct
