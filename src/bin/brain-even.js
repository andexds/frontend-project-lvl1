#!/usr/bin/env node

import startGame from '..';
import brainEven, { welcomeMessage } from '../games/brain-even';

welcomeMessage();
startGame(brainEven);
