import getRandomNumber from '../helpers/random';
import startGame from '..';

const isEven = (number) => number % 2 === 0;

const getBrainEvenRound = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => startGame('Brain Even Game', 'Answer "yes" if the number is even, otherwise answer "no".', getBrainEvenRound);
