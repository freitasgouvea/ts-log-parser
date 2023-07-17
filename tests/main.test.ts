import * as fs from 'fs';
import * as path from 'path';
import { main } from '../src/main';

const mockFile = path.join(__dirname, 'mocks/mock.log');
const mockFileContent = fs.readFileSync(mockFile, 'utf-8');

describe('main', () => {
  it('should create a report object from a log file', async () => {
    const report = main(mockFileContent);
    
    expect(report);
  });

  it('should create a report object from a log file with correct data', async () => {
    const report = main(mockFileContent);

    expect(report.matches[0].totalKills).toBe(7);
    expect(report.matches[0].players).toHaveLength(6);
    expect(report.matches[0].kills["Zeh"]).toBe(2);
    expect(report.matches[0].kills["Isgalamido"]).toBe(1);
    expect(report.matches[0].kills["Assasinu Credi"]).toBe(2);
  });

  it('should not create a report object from a log file with world in kills object', async () => {
    const report = main(mockFileContent);

    expect(report.matches[0].kills["<world>"]).toBeFalsy();
  });
});
