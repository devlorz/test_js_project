module.exports = {
  debug: true,
  mongoUri: 'mongodb://localhost/my-project',
  sessionSecret: 'dev_secret_key',
  facebook: {
    clientID: '433426203523066',
    clientSecret: '7bc7ebaa33211e8305918a7959effb18',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  google: {
    clientID: '561266387216-c86q4pn94ceo2vkdm42qt7skit1sr8b7.apps.googleusercontent.com',
    clientSecret: 'ubyP8idcESVIG7lzHa-22wT5',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};
