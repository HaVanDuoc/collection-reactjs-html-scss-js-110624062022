import React from 'react'
import Footer from './Footer'
import './Sidebar.scss'
import Navigation from './Navigation'

const Sidebar = () => {
  return (
    <div id='hvd-sidebar'>
      <div className='slide__scroll'>
        <div className="inner-sidebar">
          <Navigation />
          <Footer />
        </div >
      </div>
    </div >
  )
}

export default Sidebar