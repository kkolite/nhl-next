import { ITeam } from '@/data/types';
import React from 'react';
import styles from './Team.module.scss';

interface IProps {
  team: ITeam
}

const Team = ({team}:IProps) => {
  return (
    <div className={styles.container}>
      <h3>{team.name}</h3>
      <div className={styles.controls}>
        <button>Roster</button>
        <button>Schedule</button>
        <button>Stats</button>
      </div>
    </div>
  );
};

export default Team;
