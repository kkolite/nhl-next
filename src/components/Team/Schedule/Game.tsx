import { IGame } from '@/data/types';
import React from 'react';
import styles from './Schedule.module.scss';

interface IProps {
  game: IGame
}

const Game = ({game}:IProps) => {
  return (
    <div className={styles.game}>
      <p className={styles.game__main}>
        {game.teams.away.team.name} 
        <span> {game.teams.away.score}-{game.teams.home.score} </span> 
        {game.teams.home.team.name}
      </p>
      <p>{game.venue.name}</p>
    </div>
  );
};

export default Game;