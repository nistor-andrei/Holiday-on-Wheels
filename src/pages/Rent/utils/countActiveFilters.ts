export interface IObject {
  [key: string]: string;
}

export const countActiveFilters = (obj: IObject) => {
  let count = 0;
  for (const key in obj) {
    if (obj[key] !== "") {
      count++;
    }
  }
  return count;
};
