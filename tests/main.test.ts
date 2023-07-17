import * as fs from 'fs';
import * as path from 'path';
import { main, printReport } from '../src/main';

const mockFile = path.join(__dirname, 'mocks/mock.log');
const mockFileContent = fs.readFileSync(mockFile, 'utf-8');

describe('main', () => {
  it('should create a report object from a log file', () => {
    const report = main(mockFileContent);
    
    expect(report);
  });

  it('should create a report object from a log file with correct data', () => {
    const report = main(mockFileContent);

    expect(report.matches[0].totalKills).toBe(7);
    expect(report.matches[0].players).toHaveLength(6);
    expect(report.matches[0].kills["Zeh"]).toBe(2);
    expect(report.matches[0].kills["Isgalamido"]).toBe(1);
    expect(report.matches[0].kills["Assasinu Credi"]).toBe(2);
    expect(report.matches[0].killByMeans["MOD_ROCKET_SPLASH"]).toBe(4);
    expect(report.playerRank["Zeh"]).toBe(2);
    expect(report.playerRank["Isgalamido"]).toBe(1);
    expect(report.playerRank["Assasinu Credi"]).toBe(2);
  });

  it('should not create a report object from a log file with world in kills object', () => {
    const report = main(mockFileContent);

    expect(report.matches[0].kills["<world>"]).toBeFalsy();
  });
});
