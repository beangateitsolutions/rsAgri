import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation } from "react-router-dom"
import Footer from './components/Footer/Footer'
import BootomHeader from "./components/Header/Bottomheader/BottomHeader"
import MiddleHeader from './components/Header/MiddileHeader/MiddleHeader'
import TopHeader from './components/Header/Topheader/TopHeader'
import Wallet from './components/Wallet/Wallet'
import Blog from './pages/Blog'
import Cart from "./pages/Cart"
import Catagory from './pages/Catagory'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Myoder from './pages/Myoder'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'
import Trackingoder from './pages/Trackingoder'
import Wish from './pages/Wish'
import { loadBrand, loadCategory, loadProduct } from './reduxconfig/MasterSlice'
import webService from './services/WebService'
import webUrls from './services/WebUrls'
import TestCart from './pages/TestCart'


export default function App() {

  const dispatch = useDispatch()
const  addressroutes=useLocation()
console.log(addressroutes.pathname)
  useEffect(async () => {
    var cateData = await webService.getApiCall(webUrls.CATEGORY_LOAD);
    dispatch(loadCategory(cateData.data))

    var brandData = await webService.getApiCall(webUrls.BRAND_LOAD);
    dispatch(loadBrand(brandData.data))

    var prodData = await webService.getApiCall(webUrls.PRPODUCT_LOAD);
    dispatch(loadProduct(prodData.data))

  }, [])
  let condition = window.location.href;
  const [Address, setAddress] = useState(addressroutes.pathname);
  // console.log(Address)

  if (Address === "/authentication-Login.html" || Address === "/authentication-register.html") {
    
    return (
      <Routes>
        <Route path='/authentication-register.html' element={<Register />} />
        <Route path='/authentication-Login.html' element={<Login />} />
      </Routes>
    )
  }
  else {
    return (
      <div>
        <TopHeader />
        <MiddleHeader login={true} />
        <BootomHeader />

        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/Trackingoder' element={<Trackingoder />} />
          <Route path='/Blogs' element={<Blog />} />
          {/* <Route path='/Cart' element={<Cart />} /> */}
          <Route path='/Cart' element={<TestCart />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/details' element={<ProductDetails />} />
          <Route path='/account-orders.html' element={<Myoder />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/cat' element={<Catagory />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/authentication-Login.html' element={<Login />} />
          <Route path='/authentication-register.html' element={<Register />} />
          <Route path='/authentication-register.html' element={<Register />} />





        </Routes>

        <Footer />

      </div>
    )
  }
}
