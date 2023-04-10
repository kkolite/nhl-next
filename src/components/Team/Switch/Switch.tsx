import { EOption } from '@/data/types';
import { useAppSelector } from '@/store/hook';
import React from 'react';
import Roster from '../Roster/Roster';
import Stats from '../Stats/Stats';
import Next from '../Schedule/Next/Next';
import Prev from '../Schedule/Prev/Prev';
import styles from './Switch.module.scss';

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
    case EOption.NEXT:
      result = <Next />
      break;
    case EOption.PREV:
      result = <Prev />
      break;
  }

  return (
    <div className={styles.container}>
      {result}
    </div>
  );
};

export default Switch;