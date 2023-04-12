import { useAppSelector } from '@/store/hook';
import React from 'react';
import SetDate from './SetDate';
import { MyLoader } from '@/components/UI/loader';
import GameList from './GameList';
import { TEXT } from '@/data/text';

const Schedule = () => {
  const schedule = useAppSelector(store => store.schedule.schedule);
  const isLoading = useAppSelector(store => store.schedule.isLoading);

  const now = Date.now();
  const futureGames = schedule.filter((el) => new Date(el.date).getTime() > now);
  const prevGames = schedule.filter((el) => new Date(el.date).getTime() < now);

  return (
    <div>
      <SetDate />
      {
        isLoading 
        ? <MyLoader />
        : schedule.length
          ? <>
              {
              futureGames.length 
                ? <>
                    <h4>Future games</h4>
                    <GameList gamesList={futureGames} />
                  </>
                : <></>
              }
              {
              prevGames.length 
                ? <>
                    <h4>Prev games</h4>
                    <GameList gamesList={prevGames} />
                  </>
                : <></>
              }
            </>
          : <p>{TEXT.ERRORS.GAMES_NOT_FOUND}</p>
      }
    </div>
  );
};

export default Schedule;
