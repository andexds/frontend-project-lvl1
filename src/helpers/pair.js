import getRandomNumber from './random';

const makeRandomPair = (x = getRandomNumber(0, 10), y = getRandomNumber(0, 10)) => (selector) => {
  switch (selector) {
    case 'first':
      return x;
    case 'second':
      return y;
    default: return false;
  }
};

const getX = (pair) => pair('first');
const getY = (pair) => pair('second');

const sum = (pair) => String(getX(pair) + getY(pair));
const mult = (pair) => String(getX(pair) * getY(pair));
const minus = (pair) => String(getX(pair) - getY(pair));

export {
  makeRandomPair, getX, getY, sum, mult, minus,
};
