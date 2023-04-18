import { MAIN, PLAYER } from "@/data/APILinks";
import { IPerson } from "@/data/types";

interface IResult {
  copyright: string,
  people: IPerson[]
}

export const APIPerson = async(ID: number) => {
  const res = await fetch(`${MAIN}${PLAYER}${ID}`);
  const result: IResult = await res.json();
  return result.people[0];
}
