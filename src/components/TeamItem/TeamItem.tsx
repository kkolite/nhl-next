import { ITeam } from '@/data/types';
import React from 'react';
import styles from './TeamItem.module.scss';
import Link from 'next/link';

interface IProps {
  team: ITeam
}

const Team = ({team}:IProps) => {
  return (
    <div className={styles.container}>
      <div>
        <Link href={`/teams/${team.id}`}>
          <h3>{team.name}</h3>
        </Link>
        <small>{team.division.name}</small>
      </div>
    </div>
  );
};

export default Team;
