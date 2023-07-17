export type PlayerRankType = {
  [key: string]: number;
}

export type GameReportType = {
  matches: MatchDataType[];
  playerRank: PlayerRankType;
  processGame: (data: string) => void;
}

export type MatchDataType = {
  totalKills: number;
  players: string[];
  kills: { [player: string]: number };
  killByMeans: { [mean: string]: number };
  processMatch: (lines: string[]) => void;
}
