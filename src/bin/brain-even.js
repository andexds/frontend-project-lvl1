#!/usr/bin/env node

import startGame from '..';
import brainEven, { wellcomeMessage } from '../games/brain-even';

wellcomeMessage();
startGame(brainEven);
