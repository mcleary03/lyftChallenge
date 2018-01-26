# Node Addition

## Description

This node app will ask you for two numbers and respond with their sum.
It is indeed overengineered.
 
  ### Dependencies
  * [Axios](https://www.npmjs.com/package/axios) for handling POST requests
  * [Inquirer](https://www.npmjs.com/package/inquirer) for handling interactive user input

## Running the app
 1. Download or clone this repository
 1. Enter `npm install` in the terminal
 1. Enter `npm start` to start app
  
    *to quit app at any time, press `ctrl + c`*


## Using the app
 * In the terminal you will be asked to enter a first and second number
   + If the input is valid, the results will print to the console
   + If the input is invalid, you will be asked to try again

```node
? Enter the first number
> 2345
? Enter the second number
> 64
Sum of inputs: 2409
```
 * Returns the sum wrapped in a Promise
