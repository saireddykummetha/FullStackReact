import { createSlice } from "@reduxjs/toolkit";


const initialstate = {
    productList: [],
    
}
export const ProductSlice=createSlice({
 name:"product",
 initialState:initialstate,
 reducers:{
    setallproducts:(state,action)=>{
       console.log(action);
      state.productList=[...action.payload]
    },

 }
})

export const { setallproducts} = ProductSlice.actions;
export default ProductSlice.reducer