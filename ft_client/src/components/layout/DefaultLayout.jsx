import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
        <Header/>
       {/* navbar 1*/}

       <Outlet/>
      {/* {actual page content} */}
    {/* footer */}
    <Footer/>
    </div>
  )
}

export default DefaultLayout
