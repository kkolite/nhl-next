import Franchise from '@/components/Franchise/Franchise';
import { MyLoader } from '@/components/UI/loader';
import { fetchFranchise } from '@/store/franchisesSlice';
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
            <br/>
            <br/>
            At its inception, the NHL had four teams, all in Canada, 
            thus the adjective "National" in the league's name. The league e
            xpanded to the United States in 1924, when the Boston Bruins joined, a
            nd has since consisted of both American and Canadian teams. From 1942 to
             1967, the league had only six teams, collectively 
             (if not contemporaneously) nicknamed the "Original Six". 
             The NHL added six new teams to double its size at the 1967 NHL expansion. 
             The league then increased to 18 teams by 1974 and 21 teams in 1979. 
             Between 1991 and 2000 the NHL further expanded to 30 teams. 
             It added its 31st and 32nd teams in 2017 and 2021, respectively.
        </p>
        <Image 
          src={nhlLogo}
          alt='nhl-logo'
          width={300}
          height={340}
          placeholder='blur'
        />
      </div>
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
  );
};

export default franchises;
