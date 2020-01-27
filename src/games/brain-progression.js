import getRandomNumber from '../helpers/random';
import startGame from '..';

const gameBrainProgression = () => {
  const countOfNumbersInProgression = 10;
  const start = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const positionOfEmpty = getRandomNumber(0, countOfNumbersInProgression - 1);
  let progression = '';
  const answer = String(start + step * positionOfEmpty);

  for (let i = 0; i < countOfNumbersInProgression; i += 1) {
    if (i !== positionOfEmpty) {
      progression += ` ${start + step * i} `;
    } else {
      progression += ' ... ';
    }
  }

  return {
    question: progression,
    answer,
  };
};

export default () => startGame({
  gameName: 'Brain Progression Game',
  regulations: 'What number is missing in the progression?',
  round: gameBrainProgression,
});
