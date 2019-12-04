import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('What is your name?\n');

export default askName;
