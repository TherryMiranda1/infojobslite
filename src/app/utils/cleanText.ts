export const cleanText = (text?: string): string =>
  text ? text.replaceAll(" ", "-") : "";
