Fitbit = {};

urls = {
  requestToken: "https://api.fitbit.com/oauth/request_token",
  authorize: "https://www.fitbit.com/oauth/authorize",
  accessToken: "https://api.fitbit.com/oauth/access_token",
  authenticate: "https://www.fitbit.com/oauth/authenticate"
};

Fitbit.whitelistedFields = ['fullName', 'avatar', 'gender', 'country', 'nickname', 'dateOfBirth'];

Oauth.registerService('fitbit', 1, urls, function(oauthBinding) {

  var identity = oauthBinding.get('https://api.fitbit.com/1/user/-/profile.json').data;

  var serviceData = {
    id: identity.user.encodedId,
    name: identity.user.displayName,
    accessToken: OAuth.sealSecret(oauthBinding.accessToken),
    accessTokenSecret: OAuth.sealSecret(oauthBinding.accessTokenSecret)
  };
  
  var fields = _.pick(identity, Fitbit.whitelistedFields);
  _.extend(serviceData, fields);

  return {
    serviceData: serviceData,
    options: {
      profile: {fullNaame: identity.user.fullNaame, displayName: identity.user.displayName}
    }
  };
});
Fitbit.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};