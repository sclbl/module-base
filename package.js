Package.describe({
  name: 'sclbl:module-base',
  summary: 'Base package every module needs to function in the Scalable system.',
  version: '0.1.0',
  git: 'https://github.com/sclbl/module-base.git'
});

Package.onUse(function (api) {
  api.use('ecmascript', ['client', 'server']);
  api.use('ddp', ['client', 'server']);

  api.addFiles('lib/connection.js', ['client', 'server']);
  api.addFiles('server/register_module.js', 'server');

  api.export('getScalableConnection');
});
