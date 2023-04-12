import { useAppDispatch, useAppSelector } from '@/store/hook';
import { fetchSchedule, setEnd, setStart } from '@/store/scheduleSlice';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { validateDate } from './utils/validate';
import { TEXT } from '@/data/text';

const SetDate = () => {
  const start = useAppSelector(store => store.schedule.startSearch);
  const end = useAppSelector(store => store.schedule.endSearch);
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const {query} = useRouter();

  const handleClick = () => {
    if (!query.id) return;
    if (!validateDate(start, end)) {
      setError(TEXT.ERRORS.INVALID_DATE);
      return;
    }

    const ID = Number(query.id);
    dispatch(fetchSchedule({ID, start, end}));
  }

  const handleStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStart(e.target.value));
    setError('');
  }

  const handleEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEnd(e.target.value));
    setError('');
  }

  return (
    <div>
      <input 
        type="date" 
        value={start} 
        onChange={handleStart}
      />
      <input 
        type="date" 
        value={end} 
        onChange={handleEnd}
      />
      <button onClick={handleClick}>Find</button>
      <label>{error}</label>
    </div>
  );
};

export default SetDate;