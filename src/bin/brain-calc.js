#!/usr/bin/env node

import startGame from '..';
import brainCalc, { welcomeMessage } from '../games/brain-calc';

welcomeMessage();
startGame(brainCalc);
