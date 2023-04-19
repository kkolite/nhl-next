import { ITeam } from '@/data/types';
import React from 'react';
import styles from './TeamItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { LOGOS } from '../../../public/logos';

interface IProps {
  team: ITeam
}

const Team = ({team}:IProps) => {
  return (
    <div className={styles.container}>
      <div>
        <Link href={`/teams/${team.id}`} className={styles.link}>
          <h3 className={styles.h}>{team.name}</h3>
        </Link>
        <small>{team.division.name}</small>
      </div>
      <Image 
        src={LOGOS[team.abbreviation]}
        alt="logo"
        placeholder='empty'
        className={styles.logo}
      />
    </div>
  );
};

export default Team;
