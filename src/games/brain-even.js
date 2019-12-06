import readlineSync from 'readline-sync';
import randomNumber from '../helpers/random';

const wellcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const brainEven = () => {
  const currentNumber = randomNumber(10);
  console.log(`Question: ${currentNumber}`);
  const correctAnswer = (currentNumber % 2 === 0) && currentNumber > 0 ? 'yes' : 'no';

  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\n`);
  return false;
};

export { wellcomeMessage };
export default brainEven;
