import { IGame } from '@/data/types';
import React from 'react';

interface IProps {
  game: IGame
}

const Game = ({game}:IProps) => {
  return (
    <div>
      <p>{game.teams.away.team.name} {game.teams.away.score}-{game.teams.home.score} {game.teams.home.team.name}</p>
      <p>{game.venue.name}</p>
    </div>
  );
};

export default Game;