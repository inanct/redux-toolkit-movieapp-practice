import React from 'react'
import Header from './comman/Header'
import { Outlet } from 'react-router-dom'
import Footer from './comman/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout