# Node Addition

## Description
This is a simple node application that will ask you for two numbers and respond with their sum.
  
  ### Dependencies
  * [Axios](https://www.npmjs.com/package/axios) for handling POST requests
  * [Inquirer](https://www.npmjs.com/package/inquirer) for handling interactive user input

## Running the app
 1. Download or clone this repository
 1. Enter `npm install` in the terminal
 1. Enter `node app.js` to start app
  
  * *to quit app at any time, press `ctrl + c`*


## Using the app
 * In the terminal you will be asked to enter a first and second number
   + If the input is valid, the results will print to the console
   + If the input is invalid, you will be asked to try again

```console
? Enter the first number
> 3
? Enter the second number
> 4
making api call now...
3 + 4 = 7
```
 * The return value is the sum of the two inputs