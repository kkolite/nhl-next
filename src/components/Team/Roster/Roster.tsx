import { useAppDispatch, useAppSelector } from '@/store/hook';
import { fetchRoster } from '@/store/rosterSlice';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Roster = () => {
  const roster = useAppSelector(store => store.roster.roster);
  const isLoading = useAppSelector(store => store.roster.isLoading);
  const dispatch = useAppDispatch();
  const {query} = useRouter();

  useEffect(() => {
    if (!query.id) return;
    dispatch(fetchRoster(+query.id))
  }, [])
  return (
    <div>
      {roster.map((el) => (
        <li key={el.jerseyNumber}>{el.jerseyNumber}. {el.person.fullName}</li>
      ))}
    </div>
  );
};

export default Roster;