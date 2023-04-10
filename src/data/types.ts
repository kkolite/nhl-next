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
  active: true,
  link: String,
  roster?: {
    roster: IPlayer[]
  }
}

export enum EConference {
  EAST = 'Eastern',
  WEST = 'Western'
}

export enum EOption {
  ROSTER = '?expand=team.roster',
  STATS = '?expand=team.stats',
  NEXT = '?expand=team.schedule.next',
  PREV = '?expand=team.schedule.previous'
}

export interface IPlayer {
  person: {
    id: number,
    fullName: string
  },
  jerseyNumber: string,
  position: {
    code: string,
    type: string
  }
}