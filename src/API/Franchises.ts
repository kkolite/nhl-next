import { FRANCHISES, MAIN } from "@/data/APILinks";
import { IFranchise } from "@/data/types";

interface IResult {
  copyright: string;
  franchises: IFranchise[];
}

export const Franchises = async () => {
  const res = await fetch(`${MAIN}${FRANCHISES}`);
  const result: IResult = await res.json();
  return result.franchises;
};
