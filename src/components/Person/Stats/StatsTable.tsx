import { ESort, IPersonStat } from '@/data/types';
import React from 'react';
import StatsTR from './StatsTR';
import styles from './Stats.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { sort, sortBySeason } from '@/store/slices/personStatsSlice';
import { TEXT } from '@/data/text';

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
            {TEXT.PLAYER.SEASON}
          </th>
          <th>{TEXT.PLAYER.TEAM}</th>
          <th>{TEXT.PLAYER.LEAGUE}</th>
          <th 
            onClick={() => handleClick(ESort.GAMES)}
            className={activeSort === ESort.GAMES ? styles.active : ''}
          >
            {TEXT.PLAYER.GAMES}
          </th>
          <th 
            onClick={() => handleClick(ESort.GOALS)}
            className={activeSort === ESort.GOALS ? styles.active : ''}
          >
            {TEXT.PLAYER.GOALS}
          </th>
          <th 
            onClick={() => handleClick(ESort.ASSISTS)}
            className={activeSort === ESort.ASSISTS ? styles.active : ''}
          >
            {TEXT.PLAYER.ASSISTS}
          </th>
          <th 
            onClick={() => handleClick(ESort.POINTS)}
            className={activeSort === ESort.POINTS ? styles.active : ''}
          >
            {TEXT.PLAYER.POINTS}
          </th>
          <th 
            onClick={() => handleClick(ESort.SAVES)}
            className={activeSort === ESort.SAVES ? styles.active : ''}
          >
            {TEXT.PLAYER.SAVES}
          </th>
          <th 
            onClick={() => handleClick(ESort.SHOTS_AGAINST)}
            className={activeSort === ESort.SHOTS_AGAINST ? styles.active : ''}
          >
            {TEXT.PLAYER.SA}
          </th>
        </tr>
      </thead>
      <tbody>{stats.map((el, i) => <StatsTR stat={el} key={i}/>)}</tbody>
    </table>
  );
};

export default StatsTable;