export = (appInfo: any) => {
  const config: any = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556961747167_6202';

  // add your config here
  config.middleware = [
  ];

  config.session = {
    key: 'my_sess',
    maxAge: 1 * 60 * 1000  // session超时1分钟
  };

  return config;
};
