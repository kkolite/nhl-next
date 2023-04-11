import { useAppDispatch } from '@/store/hook';
import styles from './Navigation.module.scss';
import { setOption } from '@/store/teamSettingSlice';
import { EOption } from '@/data/types';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const handleClick = (option: EOption) => {
    dispatch(setOption(option))
  }

  return (
    <ul className={styles.container}>
      <li onClick={() => handleClick(EOption.ROSTER)}>Roster</li>
      <li onClick={() => handleClick(EOption.STATS)}>Stats</li>
      <li onClick={() => handleClick(EOption.SCHEDULE)}>Schedule</li>
    </ul>
  );
};

export default Navigation;
