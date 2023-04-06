import Franchise from '@/components/Franchise/Franchise';
import { fetchFranchise } from '@/store/franchisesSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import React, { useEffect } from 'react';

const franchises = () => {
  const list = useAppSelector(state => state.cards.cards);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFranchise());
  }, [])
  return (
    <>
      <h1>List of NHL Franchises</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Maiores alias vitae soluta id perspiciatis ipsam blanditiis, 
        voluptatum dolores eum sed exercitationem quae magnam, consectetur 
        doloremque commodi ipsa, ex placeat sapiente!
      </p>
      {list.map((el) => (
        <Franchise key={el.franchiseId} franchise={el} />
      ))}
    </>
  );
};

export default franchises;
