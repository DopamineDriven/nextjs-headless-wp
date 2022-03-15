export type Dictionary<T = string | string[] | undefined> = {
  [key: string]: T;
  [index: number]: T;
};

export function toCamelCase(str: string) {
  return str
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/ (.)/g, function (match) {
      return match.toUpperCase();
    })
    .replace(/ /g, "");
}

export function objectToCamelCase(origObj: Dictionary<any>) {
  return Object.keys(origObj).reduce(function (
    newObj: Dictionary<any>,
    key
  ) {
    const val = origObj[key];
    const newVal = typeof val === "object" ? objectToCamelCase(val) : val;
    newObj[toCamelCase(key)] = newVal;
    return newObj;
  },
  {});
}
