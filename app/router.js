'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  // ${fileName}.${functionName}
  // Controller 支持子目录，在定义路由的时候，可以通过 ${directoryName}.${fileName}.${functionName}
  router.get('/', controller.home.index);
  router.post('/', controller.home.analysis);
  router.get('/search', controller.home.search);

  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);

};
