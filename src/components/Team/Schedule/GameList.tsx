import React from 'react';
import Game from './Game';
import { IDate } from '@/data/types';
import styles from './Schedule.module.scss';

interface IProps {
  gamesList: IDate[]
}

const GameList = ({gamesList}:IProps) => {
  return (
    <div className={styles.games__list}>
      {
      gamesList.map((el) => (
      <div className={styles.date__block}>
        <span>{new Date(el.date).toLocaleDateString('en-US')}</span>
        {
        el.games.map((game) => (
          <Game game={game} />
        ))
        }
      </div>
      ))}
    </div>
  );
};

export default GameList;