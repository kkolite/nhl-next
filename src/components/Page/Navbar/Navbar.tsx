import { TEXT } from '../../../data/text';
import { MyLink } from '../../UI';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <MyLink to="/">{TEXT.PAGES.ABOUT}</MyLink>
      <MyLink to="/franchises">{TEXT.PAGES.FRANCHISES}</MyLink>
      <MyLink to="/teams">{TEXT.PAGES.TEAMS}</MyLink>
    </div>
  );
};
