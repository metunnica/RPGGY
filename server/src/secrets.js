const dotenv = require('dotenv');
dotenv.load({ path: './.env' });

const secrets = {
  dbUri: process.env.DB_UN + encodeURIComponent(process.env.DB_PW) + process.env.DB_URI,
};

const getSecret = (key) => {
  if (secrets[key]) {    
    return secrets[key];
  } else {
    return null;
  }
};

module.exports = {
  getSecret
};