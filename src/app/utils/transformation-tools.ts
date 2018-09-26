export function emptyString2Undefined (obj: any): any {
  if (obj === '') { return undefined; }
  return obj;
}
