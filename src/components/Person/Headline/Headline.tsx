import { IPerson } from '@/data/types';
import Link from 'next/link';
import React from 'react';
import styles from './Headline.module.scss';

interface IProps {
  person: IPerson;
}

const Headline = ({person}:IProps) => {
  return (
    <div>
      <h1>{person.fullName}</h1>
      <small className={styles.small}>
        #{person.primaryNumber + ' '} 
        {
          person.currentTeam
            ? <Link 
                href={`/teams/${person.currentTeam.id}`}
                className={styles.link}
              >
                {person.currentTeam.name || ''}
              </Link>
            : <></>
        } 
        
      </small>
    </div>
  );
};

export default Headline;