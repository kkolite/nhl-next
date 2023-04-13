import { useAppDispatch } from '@/store/hook';
import styles from './Navigation.module.scss';
import { setOption } from '@/store/teamSettingSlice';
import { EOption } from '@/data/types';
import { useInnerNavigate } from '@/hooks';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isRoster, isSchedule, isStats, setActive } = useInnerNavigate()
  const handleClick = (option: EOption) => {
    dispatch(setOption(option));
    setActive(option);
  }

  return (
    <ul className={styles.container}>
      <li 
        onClick={() => handleClick(EOption.ROSTER)}
        className={isRoster ? styles.active : ''}
      >
        Roster
      </li>
      <li 
        onClick={() => handleClick(EOption.STATS)}
        className={isStats ? styles.active : ''}
      >
        Stats
      </li>
      <li 
        onClick={() => handleClick(EOption.SCHEDULE)}
        className={isSchedule ? styles.active : ''}
      >
        Schedule
      </li>
    </ul>
  );
};

export default Navigation;
