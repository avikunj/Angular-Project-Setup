const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
let targetPath = '';

switch (environment) {
   case "prod":
     targetPath = `./src/environments/environment.prod.ts`
      break;
   case "dev":
     targetPath = `./src/environments/environment.dev.ts`
      break;
   case "local":
      targetPath = `./src/environments/environment.local.ts`  
   break; 
   default:
      targetPath = `./src/environments/environment.local.ts`
      break;
}

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   API_URL: "${process.env.API_URL}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }

   console.log(`Wrote variables to ${targetPath}`);
});