
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Newproduct from './Components/Newproduct.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Provider } from 'react-redux'
import { store } from '../store/store.jsx'
import Home from './Components/Home.jsx'
import Menu from './Components/Menu.jsx'
import SearchProduct from './Components/SearchProduct.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
     <Route path="newproduct" element={<Newproduct/>}/>
     <Route path="search" element={<SearchProduct/>}/>
      <Route path='menu/:filterby' element={<Menu/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>

)
