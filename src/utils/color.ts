export const Colors = {
  blue: '#447792',
  green: '#435442',
  red: '#c82334',
  gold: '#f4e8ce',
  pink: '#fbe2dd',
  white: '#FFFFFF',
};

export const colorMatch = (color: IColors): string => {
  switch (color) {
    case 'blue':
      return Colors.blue;
    case 'green':
      return Colors.green;
    case 'red':
      return Colors.red;
    case 'pink':
      return Colors.pink;
    case 'white':
      return Colors.white;
    default:
      return Colors.blue;
  }
};

export type IColors = 'blue' | 'green' | 'red' | 'pink' | 'white';
