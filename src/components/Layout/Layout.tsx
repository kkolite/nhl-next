import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';

interface IProps {
  children: ReactNode
}

const Layout = ({children}:IProps) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;