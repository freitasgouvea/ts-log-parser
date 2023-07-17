import * as fs from 'fs';
import * as path from 'path';
import { GameReport } from './classes/GameReport';
import { GameReportType, MatchDataType } from './types/types';

const logFilePath = path.join(__dirname, 'log/quake.log');
const logFileContent = fs.readFileSync(logFilePath, 'utf-8');

export function main(logFile: string): GameReportType {
  const report: GameReportType = new GameReport();
  report.processGame(logFile);
  printReport(report);
  return report;
}

export function printReport(report: GameReportType) {
  const convertedReport: { [key: string]: MatchDataType } = {};

  report.matches.forEach((match, index) => {
    const gameKey = `game_${index + 1}`;
    convertedReport[gameKey] = match;
  });

  const jsonReport = JSON.stringify(convertedReport);
  console.log(jsonReport);
}

main(logFileContent);
