import React from 'react';
import Navbar from './Navbar';
import Navbar_2 from './Navbar_2';
import Footer from './Footer';

function Layout({children}) {
  return (
    <>
    <Navbar_2 />
    {/* <Navbar /> */}
    {children}
    <Footer />
    </>
  );
}

export default Layout
