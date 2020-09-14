#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
const answerCallback = (answer) => {
  if (answer === 'y') {
    console.log('Thanks');
    rl.close();
  } else if (answer === 'n') {
    console.log('sorry');
    rl.close();
  } else {
    console.clear();
    console.log('you should press y or n');
    rl.question('예제 재미있습니까 (y/n)? ', answerCallback);
  }
};

rl.question('예제 재미있습니까 (y/n)? ', answerCallback);
