import React from 'react';
import { Navbar } from '../';
import styles from './Header.module.scss';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Link 
          className={styles.logo} 
          href={'/'}
        >
          NHL NEXT
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
