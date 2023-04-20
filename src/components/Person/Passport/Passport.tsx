import { IPerson } from '@/data/types';
import React from 'react';
import styles from './Passport.module.scss';
import { TEXT } from '@/data/text';

interface IProps {
  person: IPerson;
}

const Passport = ({person}:IProps) => {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>{TEXT.PLAYER.POSITION} <b>{person.primaryPosition.type}</b></li>
      <li className={styles.item}>{TEXT.PLAYER.NATION} <b>{person.nationality}</b></li>
      <li className={styles.item}>{TEXT.PLAYER.DB} <b>{person.birthDate}</b> ({person.currentAge})</li>
      <li className={styles.item}>{TEXT.PLAYER.HEIGHT} <b>{person.height}</b></li>
      <li className={styles.item}>{TEXT.PLAYER.WEIGHT} <b>{person.weight}</b></li>
    </ul>
  );
};

export default Passport;