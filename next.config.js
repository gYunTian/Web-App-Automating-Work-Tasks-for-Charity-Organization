module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/front',
          permanent: true,
        },
      ]
    },
  }