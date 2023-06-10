// config.js
export default {
    port: 3000,
    
    mongo: {
      uri: 'mongodb://localhost:27017/userManagment'
    },
    jwtAccessSecretKey:process.env.ACCESS_TOKEN_SECRET||'secretidofAccessTokenjwt',
    jwtRefreshSecretKey:process.env.REFRESH_TOKEN_SECRET||'secretidofRefreshTokenjwt'
  };
  console.log("first");