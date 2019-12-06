#!/usr/bin/env node

import startGame from '..';
import brainPrime, { welcomeMessage } from '../games/brain-prime';

welcomeMessage();
startGame(brainPrime);
