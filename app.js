const axios = require('axios');
const inquirer = require('inquirer');

const url = 'https://lyft-interview-test.herokuapp.com/test';

// make axios post request
const post = (x, y) => {
  axios.post(url, { x, y })
    .then(response => {
      console.log(`${x} + ${y} = ${response.data.sum}`);
      return response.data.sum;
    })
    .catch( error => {
      console.log(error);
    });
};

const getInput = () => {

  inquirer.prompt([
    { name: 'x', message: 'Enter the first number\n>'},
    { name: 'y', message: 'Enter the second number\n>'}
  ])
  .then( args => {
    const { x, y } = args;

    if ( validateNumber(x) && validateNumber(y) ) {
      console.log('making api call now...');
      return post(x,y);
    } else {
      console.log('WARNING: Please only enter numbers');
      getInput();
    }
  });
};

// return bool
const validateNumber = n => {
  return n && !isNaN(n);
};

// start the app
getInput();


