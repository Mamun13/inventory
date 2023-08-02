import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBounday from './../ErrorBoundary/ErrorBounday';
import Home from '../Pages/Home';
import AddProducts from '../Components/AddProducts/AddProducts';

const PageRoute = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-product" element={<AddProducts/>}/>
          <Route path="*" element={<ErrorBounday/>} />
        </Routes>
    </>
  )
}

export default PageRoute