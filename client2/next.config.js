const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
 
dotenvLoad();
 
const withNextEnv = nextEnv();

module.exports = withNextEnv({
    async redirects() {
      return [
        {
          source: '/',
          destination: '/front',
          permanent: true,
        },
      ]
    },
    env: {
      CHANNEL_ID: process.env.CHANNEL_ID,
      TOKEN: process.env.TOKEN,
    },
  });