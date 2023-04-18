import { IPlayer } from '@/data/types';
import React from 'react';
import styles from './Roster.module.scss';
import Link from 'next/link';

interface IProps {
  line: IPlayer[]
}

const RosterLine = ({line}:IProps) => {
  return (
    <ul className={styles.position__list}>
      {line.map((el) => (
        <Link 
          key={el.jerseyNumber} 
          href={`/person/${el.person.id}`} 
          className={styles.link}
        >
          {el.jerseyNumber || '- '}. {el.person.fullName}
        </Link>
      ))}
    </ul>
  );
};

export default RosterLine;
