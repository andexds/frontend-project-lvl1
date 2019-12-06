#!/usr/bin/env node

import startGame from '..';
import brainProgression, { welcomeMessage } from '../games/brain-progression';

welcomeMessage();
startGame(brainProgression);
