export const isOnlyNumberInString = (value: string) => {
  let regex = /[0-9]/;
  return value.match(regex);
};
