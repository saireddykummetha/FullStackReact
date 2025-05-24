import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import  productslice  from './ProductSlice'
import  review  from './AllReview'

export const store = configureStore({
  reducer: {
    user:userReducer,
     product:productslice,
     Review:review,
  },
})