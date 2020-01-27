import getRandomNumber from '../helpers/random';
import startGame from '..';

const isEven = (number) => number % 2 === 0;

const gemaBrainEven = () => {
  const currentNumber = getRandomNumber(0, 100);
  const answer = isEven(currentNumber) ? 'yes' : 'no';

  return {
    question: currentNumber,
    answer,
  };
};

export default () => startGame({
  gameName: 'Brain Even Game',
  regulations: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: gemaBrainEven,
});
