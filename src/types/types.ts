export type GameReportType = {
  matches: MatchDataType[];
  processGame: (data: string) => void;
}

export type MatchDataType = {
  totalKills: number;
  players: string[];
  kills: { [player: string]: number };
  processMatch: (lines: string[]) => void;
}
