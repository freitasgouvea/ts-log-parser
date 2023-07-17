import { EventType } from '../config/enum';
import { parseLine } from '../utils/parseLine';

export class MatchData {
  totalKills: number;
  players: string[];
  kills: { [player: string]: number };

  constructor() {
    this.totalKills = 0;
    this.players = [];
    this.kills = {};
  }

  private processPlayer(line: string) {
    const player = line.split('n\\')[1].split('\\t')[0];
    const formatedPlayerName = player.trim();
    if (player && !this.players.find((item) => item === formatedPlayerName)) {
      this.players.push(formatedPlayerName);
    }
  }

  private processKill(fragments: string[]) {
    const killingEvent = fragments[2];
    const author = killingEvent?.split('killed')[0].trim();
    const victim = killingEvent?.split('killed')[1]?.split('by')[0].trim();

    this.totalKills++;

    if (author !== '<world>') {
      this.kills[author] = (this.kills[author] || 0) + 1;
    } else {
      this.kills[victim] = (this.kills[victim] || 0) - 1;
    }
  }

  public processMatch (lines: string[]) {
    for (let i = 0; i < lines.length; i++) {
      const { eventType, fragments } = parseLine(lines[i]);

      switch (eventType) {
        case EventType.Kill:
          this.processKill(fragments);
          break;
        case EventType.ClientConnect:
          this.processPlayer(lines[i + 1]);
          break;
        default:
          break;
      }
    }
  }
}
