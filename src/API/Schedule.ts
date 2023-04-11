import { MAIN, SCHEDULE } from "@/data/APILinks";
import { IDate } from "@/data/types";

interface IResult {
  totalItems: number,
  totalEvents: number,
  totalGames: number,
  totalMatches: number,
  dates: IDate[],
}

export const APITeamSchedule = async(ID: number, start: string, end: string) => {
  const res = await fetch(`${MAIN}${SCHEDULE}?teamId=${ID}&startDate=${start}&endDate=${end}`);
  const result: IResult = await res.json();
  return result;
}
