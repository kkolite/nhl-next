import { MyLoader } from "@/components/UI/loader";
import { useAppSelector } from "@/store/hook";
import styles from './Stats.module.scss';
import { TEXT } from "@/data/text";

const Stats = () => {
  const stats = useAppSelector(state => state.stats.stats);
  const overall = useAppSelector(state => state.stats.overall);
  const isLoading = useAppSelector(state => state.stats.isLoading);
  
  const result = isLoading
    ? <MyLoader />
    : <div className={styles.container}>
        <div className={styles.block}>
          <h4>{TEXT.TEAM.STATS.GENERAL}</h4>
          <ul className={styles.list}>
            <li>{TEXT.TEAM.STATS.POINTS} {stats?.pts} <span>({overall?.pts})</span></li>
            <li>{TEXT.TEAM.STATS.WINS} {stats?.wins}</li>
            <li>{TEXT.TEAM.STATS.LOSSES} {stats?.losses}</li>
            <li>{TEXT.TEAM.STATS.OVERTIMES} {stats?.ot}</li>
          </ul>
        </div>
        <div className={styles.block}>
          <h4>{TEXT.TEAM.STATS.SandG}</h4>
          <ul className={styles.list}>
            <li>{TEXT.TEAM.STATS.SHOTS} {stats?.shotsPerGame} <span>({overall?.shotsPerGame})</span></li>
            <li>{TEXT.TEAM.STATS.SHOTS_ALLOWED} {stats?.shotsAllowed} <span>({overall?.shotsAllowed})</span></li>
            <li>{TEXT.TEAM.STATS.GOALS} {stats?.goalsPerGame} <span>({overall?.goalsPerGame})</span></li>
            <li>{TEXT.TEAM.STATS.GOALS_AGAINST} {stats?.goalsAgainstPerGame} <span>({overall?.goalsAgainstPerGame})</span></li>
          </ul>
        </div>
        <div className={styles.block}>
          <h4>{TEXT.TEAM.STATS.FACE_OFF}</h4>
          <ul className={styles.list}>
            <li>{TEXT.TEAM.STATS.FO_TOTAL} {stats?.faceOffsTaken} <span>({overall?.faceOffsTaken})</span></li>
            <li>{TEXT.TEAM.STATS.FO_WON} {stats?.faceOffsWon} <span>({overall?.faceOffsWon})</span></li>
            <li>{TEXT.TEAM.STATS.FO_LOST} {stats?.faceOffsLost} <span>({overall?.faceOffsLost})</span></li>
            <li>{TEXT.TEAM.STATS.FO_PERCENT} {stats?.faceOffWinPercentage} <span>({overall?.faceOffWinPercentage})</span></li>
          </ul>
        </div>
        <div className={styles.block}>
          <h4>{TEXT.TEAM.STATS.PPandPK}</h4>
          <ul className={styles.list}>
            <li>{TEXT.TEAM.STATS.PP_GOALS} {stats?.powerPlayGoals} <span>({overall?.powerPlayGoals})</span></li>
            <li>{TEXT.TEAM.STATS.PP_PERCENT} {stats?.powerPlayPercentage} <span>({overall?.powerPlayPercentage})</span></li>
            <li>{TEXT.TEAM.STATS.PK_GOALS_AGAINST} {stats?.powerPlayGoalsAgainst} <span>({overall?.powerPlayGoalsAgainst})</span></li>
            <li>{TEXT.TEAM.STATS.PK_PERCENT} {stats?.penaltyKillPercentage} <span>({overall?.penaltyKillPercentage})</span></li>
          </ul>
        </div>
      </div>
  
    return result;
};

export default Stats;