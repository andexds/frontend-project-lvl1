import getRandomNumber from '../helpers/random';
import startGame from '..';

const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const gameBrainPrime = () => {
  const number = getRandomNumber(2, 4000);
  const answer = isPrime(number) ? 'yes' : 'no';

  return {
    question: number,
    answer,
  };
};

export default () => startGame({
  gameName: 'Brain Prime Game',
  regulations: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  round: gameBrainPrime,
});
