import { MyLoader } from "@/components/UI/loader";
import { useAppSelector } from "@/store/hook";
import styles from './Stats.module.scss';

const Stats = () => {
  const stats = useAppSelector(state => state.stats.stats);
  const overall = useAppSelector(state => state.stats.overall);
  const isLoading = useAppSelector(state => state.stats.isLoading);

  const result = isLoading
    ? <MyLoader />
    : <div className={styles.container}>
        <div className={styles.block}>
          <h4>General</h4>
          <ul className={styles.list}>
            <li>Total points: {stats?.pts} <span>({overall?.pts})</span></li>
            <li>Wins: {stats?.wins}</li>
            <li>Losses: {stats?.losses}</li>
            <li>Overtimes: {stats?.ot}</li>
          </ul>
        </div>
        <div className={styles.block}>
          <h4>Shots and Goals (per game)</h4>
          <ul className={styles.list}>
            <li>Shots: {stats?.shotsPerGame} <span>({overall?.shotsPerGame})</span></li>
            <li>Shots allowed: {stats?.shotsAllowed} <span>({overall?.shotsAllowed})</span></li>
            <li>Goals: {stats?.goalsPerGame} <span>({overall?.goalsPerGame})</span></li>
            <li>Goals against: {stats?.goalsAgainstPerGame} <span>({overall?.goalsAgainstPerGame})</span></li>
          </ul>
        </div>
        <div className={styles.block}>
          <h4>Face-Off</h4>
          <ul className={styles.list}>
            <li>Total: {stats?.faceOffsTaken} <span>({overall?.faceOffsTaken})</span></li>
            <li>Won: {stats?.faceOffsWon} <span>({overall?.faceOffsWon})</span></li>
            <li>Lost: {stats?.faceOffsLost} <span>({overall?.faceOffsLost})</span></li>
            <li>Percentage: {stats?.faceOffWinPercentage} <span>({overall?.faceOffWinPercentage})</span></li>
          </ul>
        </div>
        <div className={styles.block}>
          <h4>Power Play and Penalty Killing</h4>
          <ul className={styles.list}>
            <li>PP Goals: {stats?.powerPlayGoals} <span>({overall?.powerPlayGoals})</span></li>
            <li>PP Percentage: {stats?.powerPlayPercentage} <span>({overall?.powerPlayPercentage})</span></li>
            <li>PK Goals against: {stats?.powerPlayGoalsAgainst} <span>({overall?.powerPlayGoalsAgainst})</span></li>
            <li>PK Percentage: {stats?.penaltyKillPercentage} <span>({overall?.penaltyKillPercentage})</span></li>
          </ul>
        </div>
      </div>
  
    return result;
};

export default Stats;