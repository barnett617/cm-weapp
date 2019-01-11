'use strict';

// module.exports = appInfo => {
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1545272223872_3297';

//   // add your config here
//   config.middleware = [];

//   return config;
// };

exports.security = {
  csrf: false,
};

exports.io = {
  init: { }, // passed to engine.io
  namespace: {
    '/': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
    '/example': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
  },

  // cluster 模式下，通过 redis 实现数据共享
  // redis: {
  //   host: '127.0.0.1',
  //   port: 6379,
  // },
};

// 可选
// exports.redis = {
//   client: {
//     port: 6379,
//     host: '127.0.0.1',
//     password: '',
//     db: 0,
//   },
// };

// exports.io = {
//   redis: {
//     host: { redis, server, host },
//     port: { redis, server, prot },
//     auth_pass: { redis, server, password },
//     db: 0,
//   },
// };

