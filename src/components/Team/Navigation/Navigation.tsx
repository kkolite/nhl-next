import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <ul className={styles.container}>
      <li>Roster</li>
      <li>Stats</li>
      <li>Prev Games</li>
      <li>Next Games</li>
    </ul>
  );
};

export default Navigation;
