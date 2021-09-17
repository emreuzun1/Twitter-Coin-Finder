export const Colors = {
  green: '#0FBC5F',
  lightOrange: '#FFB629',
  orange: '#FF6100',
  blue: '#0099FF',
  red: '#FF0000',
  yellow: '#EBFF00',
  grey: '#95A3B1',
  darkBlue: '#2C374A',
  black: '#1D2730',
};

export const getColor = (index: number) => {
  return Object.values(Colors)[index % Object.values(Colors).length];
};
