import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header, Footer } from '../';

interface IProps {
  children: ReactNode
}

export const Layout = ({children}:IProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
