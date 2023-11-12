/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div>
      <Header/>
      <div className='max-w-7xl mx-auto'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Root
