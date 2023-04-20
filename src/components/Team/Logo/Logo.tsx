import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './Logo.module.scss';

interface IProps {
  src: string | StaticImageData;
}
const Logo = ({src}:IProps) => {
  return (
    <>
      {
      src
          ? <Image 
              src={src}
              alt="team-logo"
              className={styles.logo}
            />
          : <div className={styles.placeholder}>
              <p className={styles.alt}>Not active</p>
            </div>
      }
    </>
  );
};

export default Logo;