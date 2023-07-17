export function orderByValue(obj: {[key: string]: number}): {[key: string]: number} {
  const entries = Object.entries(obj);

  entries.sort((a, b) => b[1] - a[1]);

  const orderedObj: {[key: string]: number} = {};
  for (const [key, value] of entries) {
    orderedObj[key] = value;
  }

  return orderedObj;
}
