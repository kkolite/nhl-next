import { IPersonStat } from '@/data/types';
import React from 'react';
import StatsTR from './StatsTR';

interface IProps {
  stats: IPersonStat[]
}

const StatsTable = ({stats}:IProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Season</th>
          <th>Team</th>
          <th>League</th>
          <th>Games</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>{stats.map((el) => <StatsTR stat={el} />)}</tbody>
    </table>
  );
};

export default StatsTable;