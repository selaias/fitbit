Package.describe({
  name: 'selaias:fitbit',
  version: '0.2.0',
  summary: 'An implementation of the Fitbit OAuth flow.',
  git: 'https://github.com/selaias/fitbit.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0.3.1');

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles(['fitbit_configure.html', 'fitbit_configure.js'], 'client');

  api.addFiles('fitbit_server.js', 'server');
  api.addFiles('fitbit_client.js', 'client');


  api.export('Fitbit');
});