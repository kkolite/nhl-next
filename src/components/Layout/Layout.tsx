import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface IProps {
  children: ReactNode
}

const Layout = ({children}:IProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;