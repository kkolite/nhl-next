import { IFranchise } from '@/data/types';
import React from 'react';
import styles from './Franchise.module.scss';
import { TEXT } from '@/data/text';

interface IProps {
  franchise: IFranchise
}

const Franchise = ({franchise}:IProps) => {
  return (
    <div className={styles.container}>
      <p>{franchise.locationName} {franchise.teamName}</p>
      <p>{TEXT.FRANCHISE.FIRST} - {franchise.firstSeasonId.toString().slice(0,4)}</p>
      <p>
        {
          franchise.lastSeasonId 
          ? `${TEXT.FRANCHISE.LAST} - ${franchise.lastSeasonId.toString().slice(4)}` 
          : TEXT.FRANCHISE.ACTIVE
        }
      </p>
    </div>
  );
};

export default Franchise;
