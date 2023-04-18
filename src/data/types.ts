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
  name: string,
  venue: {
    name: string,
    link: string,
    city: string,
    timeZone: {
      id: string,
      offset: Number,
      tz: string
    }
  },
  abbreviation: string,
  teamName: string,
  locationName: string,
  firstYearOfPlay: string,
  division: {
    id: Number,
    name: string,
    nameShort: string,
    link: string,
    abbreviation: string
  },
  conference: {
    id: Number,
    name: string,
    link: string
  },
  franchise: {
    franchiseId: Number,
    teamName: string,
    link: string
  },
  shortName: string,
  officialSiteUrl: string,
  franchiseId: Number,
  active: true,
  link: string,
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
  SCHEDULE = '?expand=team.schedule.next',
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

export interface IGame {
  gamePk: number,
  link: string,
  gameType: string,
  season: string,
  gameDate: string,
  status: {
    abstractGameState: string,
    codedGameState:string,
    detailedState: string,
    statusCode: string,
    startTimeTBD: boolean
  },
  teams: {
    away: {
      leagueRecord: {
        wins: number,
        losses: number,
        ot: number,
        type: string
      },
      score: number,
      team: {
        id: number,
        name: string,
        link: string
      }
    },
    home: {
      leagueRecord: {
        wins: number,
        losses: number,
        ot: number,
        type: string
      },
      score: number,
      team: {
        id: number,
        name: string,
        link: string
      }
    }
  },
  venue: {
    id: number,
    name: string,
    link: string
  },
  content: {
    link: string
  }
}

export interface IDate {
  date: string,
  totalItems: number,
  totalEvents: number,
  totalGames: number,
  totalMatches: number,
  games: IGame[],
  events: [],
  matches: []
}

export interface IPerson {
  id: number,
  fullName: string,
  link: string,
  firstName: string,
  lastName: string,
  primaryNumber: string,
  birthDate: string,
  currentAge: number,
  birthCity: string,
  birthStateProvince: string,
  birthCountry: string,
  nationality: string,
  height: string,
  weight: number,
  active: boolean,
  alternateCaptain: boolean,
  captain: boolean,
  rookie: boolean,
  shootsCatches: string,
  rosterStatus: string,
  currentTeam: {
      id: number,
      name: string,
      link: string
  },
  primaryPosition: {
      code: string,
      name: string,
      type: string,
      abbreviation: string
  }
}

export interface IPersonStat {
  season: string,
  stat: {
    assists: number,
    goals: number,
    games: number,
    points: number
  },
  team: {
    name: string,
    link: string
  },
  league: {
    id: number,
    name: string,
    link: string
  },
}
