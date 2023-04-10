import { MyLoader } from "@/components/UI/loader";
import { useAppSelector } from "@/store/hook";

const Stats = () => {
  const stats = useAppSelector(state => state.stats.stats);
  const overall = useAppSelector(state => state.stats.overall);
  const isLoading = useAppSelector(state => state.stats.isLoading);

  const result = isLoading
    ? <MyLoader />
    : <div>
        <div>
          <h4>General</h4>
          <ul>
            <li>Total points: {stats?.pts} ({overall?.pts})</li>
            <li>Games played: {stats?.gamesPlayed}</li>
            <li>Wins: {stats?.wins}</li>
            <li>Losses: {stats?.losses}</li>
            <li>Overtimes: {stats?.ot}</li>
          </ul>
        </div>
        <div>
          <h4>Shots and Goals (per game)</h4>
          <ul>
            <li>Shots: {stats?.shotsPerGame} ({overall?.shotsPerGame})</li>
            <li>Shots allowed: {stats?.shotsAllowed} ({overall?.shotsAllowed})</li>
            <li>Goals: {stats?.goalsPerGame} ({overall?.goalsPerGame})</li>
            <li>Goals against: {stats?.goalsAgainstPerGame} ({overall?.goalsAgainstPerGame})</li>
          </ul>
        </div>
        <div>
          <h4>Face-Off</h4>
          <ul>
            <li>Total: {stats?.faceOffsTaken} ({overall?.faceOffsTaken})</li>
            <li>Won: {stats?.faceOffsWon} ({overall?.faceOffsWon})</li>
            <li>Lost: {stats?.faceOffsLost} ({overall?.faceOffsLost})</li>
            <li>Percentage: {stats?.faceOffWinPercentage} ({overall?.faceOffWinPercentage})</li>
          </ul>
        </div>
        <div>
          <h4>Power Play and Penalty Killing</h4>
          <ul>
            <li>PP Goals: {stats?.powerPlayGoals} ({overall?.powerPlayGoals})</li>
            <li>PP Percentage: {stats?.powerPlayPercentage} ({overall?.powerPlayPercentage})</li>
            <li>PK Goals against: {stats?.powerPlayGoalsAgainst} ({overall?.powerPlayGoalsAgainst})</li>
            <li>PK Percentage: {stats?.penaltyKillPercentage} ({overall?.penaltyKillPercentage})</li>
          </ul>
        </div>
      </div>
  
    return result;
};

export default Stats;