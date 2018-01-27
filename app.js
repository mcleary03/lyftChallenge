const axios = require('axios');
const inquirer = require('inquirer');

const url = 'https://lyft-interview-test.herokuapp.com/test';
const prompts = [
  { name: 'x', message: 'Enter the first number\n>' },
  { name: 'y', message: 'Enter the second number\n>' }
];

async function post(x, y) {
  try {
    return await axios.post(url, { x, y })
  } catch(error) {
      console.log(error);
  }
};

async function getInput() {
  const args = await inquirer.prompt(prompts);
  const { x, y } = args;

  if ( validateNumber(x) && validateNumber(y) ) {
    return post(x,y);
  } else {
    console.log('WARNING: Please only enter numbers');
    getInput(); // recursively repeat questions until valid input
  }
};

const validateNumber = n => {
  return n && !isNaN(n); // bool
};

async function add(promise) {
  response = await promise();
  const { sum } = response.data;
  console.log(`Sum of inputs: ${sum}`);
  return sum; // this is wrapped in a Promise
}

// start the app
add(getInput);
