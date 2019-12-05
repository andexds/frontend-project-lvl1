#!/usr/bin/env node

import { askName } from '..';

const name = askName();
console.log(`Hello, ${name}`);
