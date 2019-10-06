/* eslint no-process-env: 0 */
require('dotenv').config();

const environment = ['DATABASE', 'PORT', 'BASE_URL'];

environment.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

module.exports = {
  DATABASE: process.env.DATABASE,
  PORT: process.env.PORT,
  BASE_URL: process.env.BASE_URL
};
