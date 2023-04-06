import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface IProps {
  children: ReactNode
}

const Layout = ({children}:IProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;