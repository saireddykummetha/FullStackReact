import { createSlice } from "@reduxjs/toolkit";


const initialstate = { 
    allReview:[],
}
export const AllReview=createSlice({
 name:"Review",
 initialState:initialstate,
 reducers:{
    allReview:(state,action)=>{
       console.log(action);
      state.allReview=[...action.payload]
    },
   
 }
})

export const { allReview } = AllReview.actions;
export default AllReview.reducer