export function parseLine(line: string): {
  eventType: string;
  fragments: string[];
} {
  let parts = line.split(' ');
  parts = parts.filter((item: string) => item);

  const eventType = parts[1];
  const fragments = line.split(': ');

  return {
    eventType,
    fragments
  };
}
