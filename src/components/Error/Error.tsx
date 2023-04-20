import { TEXT } from '@/data/text';
import Link from 'next/link';
import React from 'react';
import styles from './Error.module.scss';

const CustomError = () => {
  return (
    <div className={styles.error}>
      <p className={styles.text}>{TEXT.ERRORS.INVALID_PAGE}</p>
      <Link href={'/'}>
        <button className={styles.button}>Main Page</button>
      </Link>
    </div>
  );
};

export default CustomError;