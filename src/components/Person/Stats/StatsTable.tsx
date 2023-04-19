import { ESort, IPersonStat } from '@/data/types';
import React from 'react';
import StatsTR from './StatsTR';
import styles from './Stats.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { sort, sortBySeason } from '@/store/slices/personStatsSlice';

interface IProps {
  stats: IPersonStat[]
}

const StatsTable = ({stats}:IProps) => {
  const dispatch = useAppDispatch();
  const activeSort = useAppSelector(state => state.personStats.active);

  const handleClick = (option: ESort) => {
    dispatch(sort(option))
  }

  const handleSeasonClick = () => {
    dispatch(sortBySeason());
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.thead}>
          <th
            onClick={handleSeasonClick}
            className={activeSort ? '' : styles.active}
          >
            Season
          </th>
          <th>Team</th>
          <th>League</th>
          <th 
            onClick={() => handleClick(ESort.GAMES)}
            className={activeSort === ESort.GAMES ? styles.active : ''}
          >
            Games
          </th>
          <th 
            onClick={() => handleClick(ESort.GOALS)}
            className={activeSort === ESort.GOALS ? styles.active : ''}
          >
            Goals
          </th>
          <th 
            onClick={() => handleClick(ESort.ASSISTS)}
            className={activeSort === ESort.ASSISTS ? styles.active : ''}
          >
            Assists
          </th>
          <th 
            onClick={() => handleClick(ESort.POINTS)}
            className={activeSort === ESort.POINTS ? styles.active : ''}
          >
            Points
          </th>
          <th 
            onClick={() => handleClick(ESort.SAVES)}
            className={activeSort === ESort.SAVES ? styles.active : ''}
          >
            Saves
          </th>
          <th 
            onClick={() => handleClick(ESort.SHOTS_AGAINST)}
            className={activeSort === ESort.SHOTS_AGAINST ? styles.active : ''}
          >
            Shots Against
          </th>
        </tr>
      </thead>
      <tbody>{stats.map((el, i) => <StatsTR stat={el} key={i}/>)}</tbody>
    </table>
  );
};

export default StatsTable;