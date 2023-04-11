import { IPlayer } from '@/data/types';
import React from 'react';

interface IProps {
  line: IPlayer[]
}

const RosterLine = ({line}:IProps) => {
  return (
    <div>
      {line.map((el) => (
        <li key={el.jerseyNumber}>{el.jerseyNumber || '- '}. {el.person.fullName}</li>
      ))}
    </div>
  );
};

export default RosterLine;
