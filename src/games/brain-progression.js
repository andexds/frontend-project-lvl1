import readlineSync from 'readline-sync';
import getRandomNumber from '../helpers/random';
import startGame from '..';

const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
};

const gameBrainProgression = () => {
  const start = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const positionOfEmpty = getRandomNumber(0, 9);
  let progression = '';
  const correctAnswer = String(start + step * positionOfEmpty);

  for (let i = 0; i < 10; i += 1) {
    if (i !== positionOfEmpty) {
      progression += ` ${start + step * i} `;
    } else {
      progression += ' ... ';
    }
  }
  console.log(`Question: ${progression}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
  return false;
};

export default () => startGame(showWelcomeMessage, gameBrainProgression);
