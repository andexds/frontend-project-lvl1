import readlineSync from 'readline-sync';
import randomNumber from '../helpers/random';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (n) => {
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const brainPrime = () => {
  const number = randomNumber(4000) + 2;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (rightAnswer === answer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
  return false;
};

export { welcomeMessage };
export default brainPrime;
