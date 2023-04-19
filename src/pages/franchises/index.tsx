import Franchise from '@/components/Franchise/Franchise';
import { MyLoader } from '@/components/UI/loader';
import { fetchFranchise } from '@/store/slices/franchisesSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './franchises.module.scss'
import nhlLogo from '../../../public/nhl_logo.png'

const franchises = () => {
  const list = useAppSelector(state => state.cards.cards);
  const isLoading = useAppSelector(state => state.cards.isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFranchise());
  }, [])
  return (
    <div className='main__container'>
      <div className={styles.about}>
        <p className={styles.about__text}>
          The National Hockey League was organized at the Windsor Hotel in Montreal
           on November 26, 1917, after the suspension of operations of its 
           predecessor organization, the National Hockey Association (NHA), 
           which had been founded in 1909 in Renfrew, Ontario. The NHL immediately
            took the NHA's place as one of the leagues that contested for the 
            Stanley Cup in an annual interleague competition before a series of 
            league mergers and foldings left the NHL as the only league left 
            competing for the Stanley Cup in 1926.
        </p>
        <Image 
          src={nhlLogo}
          alt='nhl-logo'
          placeholder='blur'
          className={styles.image}
        />
      </div>
      <div className={styles.block}>
        <h1 className={styles.h}>List of NHL Franchises</h1>
        {isLoading 
          ? <MyLoader />
          : list.length
            ? <div className={styles.cards}>
                {list.map((el) => (
                  <Franchise key={el.franchiseId} franchise={el} />
                ))} 
              </div>
            : <></>
        }
      </div>
    </div>
  );
};

export default franchises;
