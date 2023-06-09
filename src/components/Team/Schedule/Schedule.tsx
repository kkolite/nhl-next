import { useAppSelector } from '@/store/hook';
import React from 'react';
import SetDate from './SetDate';
import { MyLoader } from '@/components/UI/loader';
import GameList from './GameList';
import { TEXT } from '@/data/text';
import styles from './Schedule.module.scss';

const Schedule = () => {
  const schedule = useAppSelector(store => store.schedule.schedule);
  const isLoading = useAppSelector(store => store.schedule.isLoading);

  const now = Date.now();
  const futureGames = schedule.filter((el) => new Date(el.date).getTime() > now);
  const prevGames = schedule.filter((el) => new Date(el.date).getTime() < now).reverse();

  return (
    <div className={styles.schedule__container}>
      <SetDate />
      {
        isLoading 
        ? <MyLoader />
        : schedule.length
          ? <div className={styles.games__container}>
              {
              futureGames.length 
                ? <div className={styles.games__block}>
                    <h4 className={styles.games__h}>{TEXT.TEAM.SCHEDULE.FUTURE}</h4>
                    <GameList gamesList={futureGames} />
                  </div>
                : <></>
              }
              {
              prevGames.length 
                ? <div className={styles.games__block}>
                    <h4 className={styles.games__h}>{TEXT.TEAM.SCHEDULE.PREV}</h4>
                    <GameList gamesList={prevGames} />
                  </div>
                : <></>
              }
            </div>
          : <p>{TEXT.ERRORS.GAMES_NOT_FOUND}</p>
      }
    </div>
  );
};

export default Schedule;
