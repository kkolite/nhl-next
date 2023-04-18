import React from 'react';
import styles from './Photo.module.scss';

const Photo = () => {
  return (
    <div className={styles.placeholder}>
      <p className={styles.alt}>No photo in API</p>
    </div>
  );
};

export default Photo;