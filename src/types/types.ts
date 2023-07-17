export type GameReportType = {
  matches: MatchDataType[];
}

export type MatchDataType = {
  totalKills: number;
  players: string[];
  kills: { [player: string]: number };
}
