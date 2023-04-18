import { MyLoader } from '@/components/UI/loader';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { fetchPersonStats } from '@/store/slices/personStatsSlice';
import React, { useEffect } from 'react';
import StatsTable from './StatsTable';

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
    <div>
      {
        isLoading
        ? <MyLoader />
        : stats
          ? <StatsTable stats={stats} />
          : <p>No</p>
      }
    </div>
  );
};

export default Stats;