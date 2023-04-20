import { MAIN, PLAYER, PLAYER_STAT } from "@/data/APILinks";
import { IPerson, IPersonStat } from "@/data/types";

interface IResult {
  copyright: string,
  people: IPerson[]
}

interface IResultStat {
  copyright: string,
  stats: {
    splits: IPersonStat[]
  }[]
}

export const APIPerson = async(ID: number) => {
  const res = await fetch(`${MAIN}${PLAYER}${ID}`);
  const result: IResult = await res.json();
  try {
    return result.people[0];  
  } catch (error) {
    return result;
  }
}

export const APIPersonStat = async(ID: number) => {
  const res = await fetch(`${MAIN}${PLAYER}${ID}${PLAYER_STAT}`);
  const result: IResultStat = await res.json();  
  return result.stats[0].splits;
}
