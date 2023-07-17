import { MatchDataType } from '../types/types';
import { MatchData } from './MatchData';

export class GameReport {
  matches: MatchDataType[];

  constructor() {
    this.matches = [];
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
      }
    }
  }
}
