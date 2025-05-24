import React, { useState } from 'react'
import {  useSelector } from 'react-redux';
import Homecard from './Homecard';
import Cardfeature from './Cardfeature';
const Home = () => {
  
  const productdata=useSelector(state=>state.Review.allReview)
  console.log(productdata)

  const [currentPage,setcurrentPage]=useState(0);
  const productData=useSelector(state=>state.product.productList)
  const homeproductlist=productData.slice(0,12)
  const productlist=productData

  const loadingArray=new Array(8).fill(null)

  const PAGE_SIZE=6;
  const totalProducts=productlist.length;
  const noOfPages=Math.ceil(totalProducts/PAGE_SIZE)
  const start=currentPage*PAGE_SIZE
  const end=start+PAGE_SIZE

  const handlePagechange=(n)=>{
   setcurrentPage(n)
  }
  return (
    <>
    <div className='pd-2 md:p-4'>
      <div className='text-2xl font-semibold md:w-1/2 mb-2'>
           Find Your Faviorite <span className='text-red-600'>Book</span> 
      </div>
      <div className='flex flex-wrap gap-4 mt-10 ml-10 cursor-pointer '>
        
      {
        homeproductlist[0]? homeproductlist.map(el=>{
          return(
             <Homecard
             image={el.image}
             name={el.name}
             category={el.category}
             price={el.price}
             auther={el.auther}
             key={el._id}
             id={el._id}
             />
          )
        })
           :loadingArray.map((el,index)=>{
          return(
           <Homecard
           key={index}
           loading={"Loading..."}
           />
          )
        })
      }        
      </div>
     </div>
      <div>
        <div className='text-2xl font-semibold md:w-1/2 mt-10 ml-5 '>
          Most Selling Books
        </div>
        
        <div className='flex gap-3 mt-5 ml-15 '>    
          {           
            productlist[0]? productlist.slice(start,end).map(el=>{             
              return(               
              <>             
             <Cardfeature           
             image={el.image}
             name={el.name}
             category={el.category}
             price={el.price}
             auther={el.auther}
             key={el._id}
             id={el._id}
            />
           
              </>
            )
          })
             :loadingArray.map((el,index)=>{
          return(
           <Cardfeature
           key={index}
           loading={"Loading..."}
           />
          )
        })
      }               
    </div>      
    <div className='items-center mt-5 cursor-pointer text-center mb-2 '>{[...Array(noOfPages).keys()].map(n=><span className="p-1 m-1 border-1 md:w-1/2" key={n} onClick={()=>handlePagechange(n)}>{n}</span>)}</div>
    </div>
    </>
  )
}

export default Home
