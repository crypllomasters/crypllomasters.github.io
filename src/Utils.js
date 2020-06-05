export const genArrayColors = (n: number, color: string) => {
  const array = Array.from(Array(n).keys());

  return array.map((item) => color);
};
