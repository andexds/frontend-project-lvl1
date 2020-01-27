import {
  makeRandomPair, getFirstNumber, getSecondNumber, toString,
} from '../helpers/pair';
import getRandomNumber from '../helpers/random';
import startGame from '..';

const getNOD = (pair) => {
  let x = getFirstNumber(pair);
  let y = getSecondNumber(pair);

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return String(x + y);
};

const gameBrainGcd = () => {
  const randomPair = makeRandomPair(getRandomNumber(1, 100), getRandomNumber(1, 100));
  const answer = getNOD(randomPair);

  return {
    question: toString(randomPair),
    answer,
  };
};

export default () => startGame({
  gameName: 'Brain GCD Game',
  regulations: 'Find the greatest common divisor of given numbers.',
  round: gameBrainGcd,
});
