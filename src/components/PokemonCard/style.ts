import styled from 'styled-components';

type colorsType = {
  [index: string]: string;
};

// const colors: colorsType = {
//   blue: '#79e3f7',
//   red: '#fa847f',
//   green: '#6dd2af',
//   white: '#ddd',
//   brown: '#b67a1b',
//   yellow: '#f7e05d',
//   purple: '#b595f4',
//   pink: '#f48ab2',
//   gray: '#777',
//   black: '#222',
// };

const TypeColors: colorsType = {
  water: '#5090d6',
  fire: '#fe9f52',
  grass: '#68bb5b',
  normal: '#919aa2',
  bug: '#94c030',
  ground: '#d87a42',
  electric: '#f4d239',
  poison: '#b369ce',
  flying: '#eee',
  fairy: '#ea91e6',
  fighting: '#cc4669',
  psychic: '#f87577',
  rock: '#c5b78c',
  steel: '#5b8da2',
  ice: '#77cdc1',
  ghost: '#5169ad',
  dragon: '#056dc3',
  dark: '#5a5465',
};

const txtColors: colorsType = {
  blue: '#333',
  red: '#fff',
  green: '#fff',
  white: '#333',
  brown: '#fff',
  yellow: '#333',
  purple: '#fff',
  pink: '#333',
  gray: '#fff',
  black: '#fff',
};

interface ICardContainerProps {
  bgColor: string;
  typeColor1: string;
  typeColor2: string;
}

export const CardContainer = styled.div<ICardContainerProps>`
  background: linear-gradient(
    ${({ typeColor1 }) => TypeColors[typeColor1]},
    ${({ typeColor2 }) => TypeColors[typeColor2]}
  );
  border-radius: 10px;
  color: ${({ bgColor }) => txtColors[bgColor]};
  transition: transform 300ms;

  a {
    color: ${({ bgColor }) => txtColors[bgColor]};
  }

  &:hover {
    transform: scale(1.12);
    z-index: 1;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export const TypeList = styled.li`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
`;
