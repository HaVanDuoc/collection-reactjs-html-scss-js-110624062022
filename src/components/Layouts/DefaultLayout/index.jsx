import React from 'react'
import { Navbar, Sidebar, Feed, Rightbar } from '../components/'
import './DefaultLayout.scss'

const DefaultLayout = () => {
  return (
    <div id="hvd-default-layout">
      <Navbar />
      <div className='default-layout__margintop'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default DefaultLayout