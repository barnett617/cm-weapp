'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // ${fileName}.${functionName}
  // Controller 支持子目录，在定义路由的时候，可以通过 ${directoryName}.${fileName}.${functionName}
  router.get('/', controller.home.index);
  router.post('/', controller.home.analysis);
};
