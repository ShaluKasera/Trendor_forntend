import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className=" pt-24 md:pt-28 min-h-[77vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;