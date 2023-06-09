import React from 'react';
import Photo from '../Photo/Photo';
import Passport from '../Passport/Passport';
import { IPerson } from '@/data/types';
import Headline from '../Headline/Headline';
import styles from './Person.module.scss';
import Stats from '../Stats/Stats';
import { TEXT } from '@/data/text';

interface IProps {
  person: IPerson
}

const Person = ({person}:IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Photo />
        <div className={styles.block}>
          <Headline person={person} />
          <Passport person={person} />
        </div>
      </div>
      <div className={styles.stat}>
        <h2>{TEXT.PLAYER.STAT}</h2>
        <small>{TEXT.PLAYER.SORT}</small>
        <Stats ID={person.id} />
      </div>
    </div>
  );
};

export default Person;