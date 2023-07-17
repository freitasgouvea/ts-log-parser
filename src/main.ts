import * as fs from 'fs';
import * as path from 'path';
import { GameReportType } from './types/types';

const logFilePath = path.join(__dirname, 'log/quake.log');
const logFileContent = fs.readFileSync(logFilePath, 'utf-8');

export function main(logFile: string): GameReportType {
  const report: GameReportType = {matches: []};
  console.log(report);
  return report;
}

main(logFileContent);
