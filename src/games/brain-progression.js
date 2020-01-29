import getRandomNumber from '../helpers/random';
import startGame from '..';

const getBrainProgressionRound = () => {
  const countOfNumbersInProgression = 10;
  const start = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const positionOfEmpty = getRandomNumber(0, countOfNumbersInProgression - 1);
  let progression = '';
  const answer = String(start + step * positionOfEmpty);

  for (let i = 0; i < countOfNumbersInProgression; i += 1) {
    if (i !== positionOfEmpty) {
      progression = `${progression} ${start + step * i} `;
    } else {
      progression = `${progression} ... `;
    }
  }

  return {
    question: progression,
    answer,
  };
};

export default () => startGame('Brain Progression Game', 'What number is missing in the progression?', getBrainProgressionRound);
