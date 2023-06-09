import { MyLoader } from '@/components/UI/loader';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { fetchPersonStats } from '@/store/slices/personStatsSlice';
import React, { useEffect } from 'react';
import StatsTable from './StatsTable';
import styles from './Stats.module.scss';

interface IProps {
  ID: number
}

const Stats = ({ID}:IProps) => {
  const stats = useAppSelector(state => state.personStats.stats);
  const isLoading = useAppSelector(state => state.personStats.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPersonStats(ID));
  }, [ID])

  return (
    <div className={styles.table__container}>
      {
        isLoading
        ? <MyLoader />
        : stats
          ? <StatsTable stats={stats} />
          : <></>
      }
    </div>
  );
};

export default Stats;