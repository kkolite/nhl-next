import { NHL } from "@/data/consts";
import { IPersonStat } from "@/data/types";

// It handles stat from API
// Because we get bad season format, f.e. 20082009
// And "National Hockey League" in case of NHL

export const statHandler = (stat: IPersonStat) => {
  return {
    season: stat.season.slice(0,4) + '/' + stat.season.slice(-4),
    team: stat.team.name,
    league: stat.league.name.replace(NHL, 'NHL'),
    games: stat.stat.games,
    goals: stat.stat.goals,
    assists: stat.stat.assists,
    points: stat.stat.points,
    saves: stat.stat.savePercentage ? (stat.stat.savePercentage * 100).toFixed(2) : null,
    shotsAgainst: stat.stat.goalAgainstAverage?.toFixed(2)
  }
}
