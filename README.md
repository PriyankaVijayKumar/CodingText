
## Automation test script for Sign-in functionality


    
## Test suite contains the following test cases

1. Go to https://magento.softwaretestingboard.com/ -> Home page is loaded
2. Create an account -> A new account gets created with fake emails. 
3. Test the sign in functionality using different test cases. 


## Cypress version 

- latest
    
## Node version 

- Latest


## Prerequisites




- Git client installed. To verify if git client is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command git --version

- NodeJS  installed. To verify if nodejs is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command node --version
## Setup

- Clone the project to the local and open in Visual Studio Code. 
- Run the below commands
 ```bash
   npm -i init
   npm install cypress --save -dev
   npm install @faker-js/faker --save-dev
   npx cypress open
   ```
   - Cypress will be launched and under E2E testing, choose a browser to run the test scripts. 
## Test case parameter details

The test cases are written in spec.cy.js file. The fixtures for the test case is parametrized. This way the flow could be validated with different set of parameter or arguments. The fixtures are specified in the constants.json file. Feel free to test the flow by adding different set of parameters. The cypress commands are specified in commands.js file. 

