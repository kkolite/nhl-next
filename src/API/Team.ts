import { MAIN, TEAMS } from "@/data/APILinks"
import { EOption, ITeam } from "@/data/types";

interface IResult {
  copyright: string,
  teams: ITeam[]
}

export const APITeams = async() => {
  const res = await fetch(`${MAIN}${TEAMS}`);
  const result: IResult = await res.json();
  return result.teams;
}

export const APITeam = async(ID: Number, option?: EOption) => {
  const res = await fetch(`${MAIN}${TEAMS}${ID}${option || ''}`);
  const result: IResult = await res.json();
  try {
    return result.teams[0];  
  } catch (error) {
    return result;
  }
}
