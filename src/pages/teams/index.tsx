import { APITeams } from '@/API/Team';
import Team from '@/components/TeamItem/TeamItem';
import { EConference, ITeam } from '@/data/types';
import React from 'react';
import styles from './teams.module.scss';

interface IProps {
  teams: ITeam[];
}

export const getStaticProps = async() => {
  const teams = await APITeams(); 
  return { props: {teams} };
}

const index = ({ teams }:IProps) => {
  const east = teams.filter((el) => el.conference.name === EConference.EAST);
  const west = teams.filter((el) => el.conference.name === EConference.WEST);

  return (
    <div className='main__container'>
      <div className={styles.container}>
        <div className={styles.conference}>
          <h2>Eastern</h2>
          <div className={styles.teams}>
          {
            east.map((el) => (
              <Team team={el} key={el.id.toString()} />
            ))
          }
          </div>
        </div>
        <div className={styles.conference}>
          <h2>Western</h2>
          <div className={styles.teams}>
          {
            west.map((el) => (
              <Team team={el} key={el.id.toString()} />
            ))
          }
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default index;