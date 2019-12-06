#!/usr/bin/env node

import startGame from '..';
import brainGcd, { welcomeMessage } from '../games/brain-gcd';

welcomeMessage();
startGame(brainGcd);
