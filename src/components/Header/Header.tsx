import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <p>Logo</p>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;