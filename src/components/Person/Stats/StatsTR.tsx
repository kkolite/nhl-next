import { NHL } from '@/data/consts';
import { IPersonStat } from '@/data/types';
import React from 'react';
import { statHandler } from './utils/statHandler';

interface IProps {
  stat: IPersonStat
}

const StatsTR = ({stat}:IProps) => {
  const handledStat = statHandler(stat);
  return (
    <tr>
      <td>{handledStat.season}</td>
      <td>{handledStat.team}</td>
      <td>{handledStat.league}</td>
      <td>{handledStat.games}</td>
      <td>{handledStat.goals || '-'}</td>
      <td>{handledStat.assists || '-'}</td>
      <td>{handledStat.points || '-'}</td>
      <td>{handledStat.saves || '-'}</td>
      <td>{handledStat.shotsAgainst || '-'}</td>
    </tr>
  );
};

export default StatsTR;