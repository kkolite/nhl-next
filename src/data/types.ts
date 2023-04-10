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
  },
  teamStats?: {
    splits: {
      stat: IStats
    }[]
  }[]
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

export enum EPosition {
  G = 'G',
  D = 'D',
  L = 'L',
  C = 'C',
  R = 'R'
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

export interface IStats {
  wins: string | number,
  losses: string | number,
  ot: string | number,
  pts: string | number,
  ptPctg: string | number,
  goalsPerGame: string | number,
  goalsAgainstPerGame: string | number,
  evGGARatio: string | number,
  powerPlayPercentage: string | number,
  powerPlayGoals: string | number,
  powerPlayGoalsAgainst: string | number,
  powerPlayOpportunities: string | number,
  penaltyKillOpportunities: string | number,
  penaltyKillPercentage: string | number,
  shotsPerGame: string | number,
  shotsAllowed: string | number,
  winScoreFirst: string | number,
  winOppScoreFirst: string | number,
  winLeadFirstPer: string | number,
  winLeadSecondPer: string | number,
  winOutshootOpp: string | number,
  winOutshotByOpp: string | number,
  faceOffsTaken: string | number,
  faceOffsWon: string | number,
  faceOffsLost: string | number,
  faceOffWinPercentage: string | number,
  savePctRank: string | number,
  shootingPctRank: string | number,
  gamesPlayed?: number
}
