import readlineSync from 'readline-sync';
import randomNumber from '../helpers/random';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
};

const brainProgression = () => {
  const start = randomNumber(10);
  const step = randomNumber(9) + 1;
  const positionOfEmpty = randomNumber(9);
  let progression = '';

  for (let i = 0; i < 10; i += 1) {
    if (i !== positionOfEmpty) {
      progression += ` ${start + step * i} `;
    } else {
      progression += ' ... ';
    }
  }
  console.log(`Question: ${progression}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === String(start + step * positionOfEmpty)) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${start + step * positionOfEmpty}.\n`);
  return false;
};

export { welcomeMessage };
export default brainProgression;
