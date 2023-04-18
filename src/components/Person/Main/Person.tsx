import React from 'react';
import Photo from '../Photo/Photo';
import Passport from '../Passport/Passport';
import { IPerson } from '@/data/types';
import Headline from '../Headline/Headline';
import styles from './Person.module.scss';
import Stats from '../Stats/Stats';

interface IProps {
  person: IPerson
}

const Person = ({person}:IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Photo />
        <div>
          <Headline person={person} />
          <Passport person={person} />
        </div>
      </div>
      <div>
        <h2>Player statistics</h2>
        <Stats ID={person.id} />
      </div>
    </div>
  );
};

export default Person;