import * as fs from 'fs';
import * as path from 'path';
import { GameReport } from './classes/GameReport';
import { GameReportType } from './types/types';

const logFilePath = path.join(__dirname, 'log/quake.log');
const logFileContent = fs.readFileSync(logFilePath, 'utf-8');

export function main(logFile: string): GameReportType {
  const report: GameReportType = new GameReport();
  report.processGame(logFile);
  printReport(report);
  return report;
}

export function printReport(report: GameReportType) {
  const jsonReport = JSON.stringify(report.matches);
  console.log(jsonReport);
}

main(logFileContent);
