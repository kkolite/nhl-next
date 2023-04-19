import { IPersonStat } from '@/data/types';
import React from 'react';
import StatsTR from './StatsTR';
import styles from './Stats.module.scss';

interface IProps {
  stats: IPersonStat[]
}

const StatsTable = ({stats}:IProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.thead}>
          <th>Season</th>
          <th>Team</th>
          <th>League</th>
          <th>Games</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Points</th>
          <th>Saves</th>
          <th>Shots Against</th>
        </tr>
      </thead>
      <tbody>{stats.map((el) => <StatsTR stat={el} />)}</tbody>
    </table>
  );
};

export default StatsTable;