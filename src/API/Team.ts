import { MAIN, TEAMS } from "@/data/APILinks"
import { ITeam } from "@/data/types";
interface IResult {
  copyright: string,
  teams: ITeam[]
}

export const Teams = async() => {
  const res = await fetch(`${MAIN}${TEAMS}`);
  const result: IResult = await res.json();
  return result.teams;
}

export const Team = async(ID: Number) => {
  const res = await fetch(`${MAIN}${TEAMS}${ID}`);
  const result: IResult = await res.json();
  return result.teams[0];
}
