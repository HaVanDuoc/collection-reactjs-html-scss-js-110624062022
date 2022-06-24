import React from 'react'
import { Navbar, Sidebar, Feed, Rightbar } from '../components/'
import './DefaultLayout.scss'

const DefaultLayout = () => {
  return (
    <div id="hvd-default-layout">
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
};

export default DefaultLayout