import readlineSync from 'readline-sync';

export const askName = () => {
    return readlineSync.question('What is your name?\n');
};