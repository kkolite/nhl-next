export interface IFranchise {
  franchiseId: number,
  firstSeasonId: number,
  lastSeasonId?: number,
  mostRecentTeamId: number,
  teamName: string,
  locationName: string,
  link: string
}
