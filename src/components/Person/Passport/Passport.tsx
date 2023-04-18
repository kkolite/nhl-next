import { IPerson } from '@/data/types';
import React from 'react';
import styles from './Passport.module.scss';

interface IProps {
  person: IPerson;
}

const Passport = ({person}:IProps) => {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>Position: <b>{person.primaryPosition.type}</b></li>
      <li className={styles.item}>Nation: <b>{person.nationality}</b></li>
      <li className={styles.item}>Date of Birth: <b>{person.birthDate}</b> ({person.currentAge})</li>
      <li className={styles.item}>Height: <b>{person.height}</b></li>
      <li className={styles.item}>Weight: <b>{person.weight}</b></li>
    </ul>
  );
};

export default Passport;