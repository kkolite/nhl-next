import { useAppDispatch } from '@/store/hook';
import styles from './Navigation.module.scss';
import { setOption } from '@/store/slices/teamSettingSlice';
import { EOption } from '@/data/types';
import { useInnerNavigate } from '@/hooks';
import { TEXT } from '@/data/text';

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
        {TEXT.TEAM.NAV.ROSTER}
      </li>
      <li 
        onClick={() => handleClick(EOption.STATS)}
        className={isStats ? styles.active : ''}
      >
        {TEXT.TEAM.NAV.STATS}
      </li>
      <li 
        onClick={() => handleClick(EOption.SCHEDULE)}
        className={isSchedule ? styles.active : ''}
      >
        {TEXT.TEAM.NAV.SCHEDULE}
      </li>
    </ul>
  );
};

export default Navigation;
