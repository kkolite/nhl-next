import { EOption } from '@/data/types';
import { useAppSelector } from '@/store/hook';
import React from 'react';
import Roster from '../Roster/Roster';
import Stats from '../Stats/Stats';
import styles from './Switch.module.scss';
import Schedule from '../Schedule/Schedule';

const Switch = () => {
  const option = useAppSelector(store => store.teamSetting.current);

  let result: JSX.Element = <p></p>
  switch (option) {
    case EOption.ROSTER:
      result = <Roster />
      break;
    case EOption.STATS:
      result = <Stats />
      break;
    case EOption.SCHEDULE:
      result = <Schedule />
      break;
  }

  return (
    <div className={styles.container}>
      {result}
    </div>
  );
};

export default Switch;