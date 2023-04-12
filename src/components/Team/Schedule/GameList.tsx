import React from 'react';
import Game from './Game';
import { IDate } from '@/data/types';

interface IProps {
  gamesList: IDate[]
}

const GameList = ({gamesList}:IProps) => {
  return (
    <div>
      {
      gamesList.map((el) => (
      <>
        <span>{new Date(el.date).toLocaleDateString('en-US')}</span>
        {
        el.games.map((game) => (
          <Game game={game} />
        ))
        }
      </>
      ))}
    </div>
  );
};

export default GameList;