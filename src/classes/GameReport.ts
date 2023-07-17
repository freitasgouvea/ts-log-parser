import { MatchDataType, PlayerRankType } from '../types/types';
import { MatchData } from './MatchData';

export class GameReport {
  matches: MatchDataType[];
  playerRank: PlayerRankType;

  constructor() {
    this.matches = [];
    this.playerRank = {};
  }

  public processGame(data: string) {
    const matches = data.split('InitGame:');
    matches.shift();

    for (let i = 0; i < matches.length; i++) {
      const lines = matches[i].split('\n');

      const matchObject = new MatchData();
      matchObject.processMatch(lines);

      if (matchObject) {
        this.matches.push(matchObject);
        const matchKills = Object.entries(matchObject.kills)
        matchKills.forEach(element => {
          this.playerRank[element[0]] = (this.playerRank[element[0]] || 0) + element[1]
        });
      }
    }
  }
}
