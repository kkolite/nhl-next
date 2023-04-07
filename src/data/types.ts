export interface IFranchise {
  franchiseId: number,
  firstSeasonId: number,
  lastSeasonId?: number,
  mostRecentTeamId: number,
  teamName: string,
  locationName: string,
  link: string
}

export interface ITeam {
  id: Number,
  name: String,
  venue: {
    name: String,
    link: String,
    city: String,
    timeZone: {
      id: String,
      offset: Number,
      tz: String
    }
  },
  abbreviation: String,
  teamName: String,
  locationName: String,
  firstYearOfPlay: String,
  division: {
    id: Number,
    name: String,
    nameShort: String,
    link: String,
    abbreviation: String
  },
  conference: {
    id: Number,
    name: String,
    link: String
  },
  franchise: {
    franchiseId: Number,
    teamName: String,
    link: String
  },
  shortName: String,
  officialSiteUrl: String,
  franchiseId: Number,
  active: true
  link: String,
}

export enum EConference {
  EAST = 'Eastern',
  WEST = 'Western'
}
