import { cons, car, cdr } from '@hexlet/pairs';
import getRandomNumber from './random';

const makeRandomPair = () => cons(getRandomNumber(0, 10), getRandomNumber(0, 10));

const getFirstNumber = (pair) => car(pair);
const getSecondNumber = (pair) => cdr(pair);
const toString = (pair) => `${getFirstNumber(pair)} ${getSecondNumber(pair)}`;

export {
  makeRandomPair, getFirstNumber, getSecondNumber, toString,
};
