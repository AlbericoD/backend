/* eslint no-process-env: 0 */
require('dotenv').config();

const environment = ['DATABASE', 'PORT'];

environment.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

module.exports = {
  DATABASE: process.env.DATABASE,
  PORT: process.env.PORT
};
