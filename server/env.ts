require('dotenv').config();

function getEnv(variable: string) {
  const value = process.env[variable];
  if (typeof value === 'undefined') {
    console.warn(`Seems like the variable "${variable}" is not set in the environment. 
    Did you forget to execute "cp .env.sample .env" and adjust variables in the .env file to match your own environment ?`);
  }
  return value;
}
const CORS_ALLOWED_ORIGINS = getEnv(`CORS_ALLOWED_ORIGINS`);
const DATABASE_URL = getEnv(`DATABASE_URL`);

module.exports = { DATABASE_URL, CORS_ALLOWED_ORIGINS, getEnv };
