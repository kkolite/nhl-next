import Image from 'next/image';
import React from 'react';
import location from '../../../../public/icons/location.png';
import website from '../../../../public/icons/world-wide-web.png';
import arena from '../../../../public/icons/stadium.png';
import styles from './Info.module.scss';
import { ITeam } from '@/data/types';
import { TEXT } from '@/data/text';

interface IProps {
  team: ITeam;
}

const Info = ({team}:IProps) => {
  return (
    <div>
      <h1>{team.name}</h1>
      {
        (team.conference.name && team.division.name)
        ? <small>{team.conference.name} {TEXT.TEAM.INFO.CONFERENCE}, {team.division.name} {TEXT.TEAM.INFO.DIVISION}</small>
        : <></>
      }
      <div className={styles.info}>
        <p>{TEXT.TEAM.INFO.FOUNDED} {team.firstYearOfPlay || '-'}</p>
        <div>
          <Image 
            src={location}
            alt='location'
            width='18'
            height='18'
            className={styles.icon}
          />
          {team.locationName || '-'}
        </div>
        <div>
          <Image 
            src={arena}
            alt='arena'
            width='18'
            height='18'
            className={styles.icon}
          />
          {team.venue?.name || '-'}
        </div>
          {
            team.officialSiteUrl
            ? <div>
                <Image 
                  src={website}
                  alt='website'
                  width='18'
                  height='18'
                  className={styles.icon}
                />
                <a href={team.officialSiteUrl} className={styles.link}>{TEXT.TEAM.INFO.WWW}</a>
              </div>
            : <></>
          }
      </div>
    </div>
  );
};

export default Info;
