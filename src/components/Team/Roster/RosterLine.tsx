import { IPlayer } from '@/data/types';
import React from 'react';
import styles from './Roster.module.scss';

interface IProps {
  line: IPlayer[]
}

const RosterLine = ({line}:IProps) => {
  return (
    <ul className={styles.position__list}>
      {line.map((el) => (
        <li key={el.jerseyNumber}>{el.jerseyNumber || '- '}. {el.person.fullName}</li>
      ))}
    </ul>
  );
};

export default RosterLine;
