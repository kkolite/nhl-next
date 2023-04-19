import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <p className={styles.copyright}>
          <b>Non-commercial project.</b> Created by <a href='https://www.github.com/kkolite' className={styles.link}>kkolite</a>.<br/>NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;