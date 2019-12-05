#!/usr/bin/env node

import { startGame } from '..';
import brainCalc, { wellcomeMessage } from '../games/brain-calc';

wellcomeMessage();
startGame(brainCalc);
