export const uppercaser = (str: string) => {
  const upper = str.charAt(0).toUpperCase() + str.slice(1);
  return upper.replaceAll("-", " ").replaceAll("_", " ");
};
