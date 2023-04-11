import { useAppSelector } from '@/store/hook';
import React from 'react';

const Schedule = () => {
  const schedule = useAppSelector(store => store.schedule.schedule);
  return (
    <div>
      {schedule.map((el) => (
        el.games.map((game) => (
          <p>{game.teams.away.team.name} - {game.teams.home.team.name} {game.gameDate}</p>
        ))
      ))}
    </div>
  );
};

export default Schedule;