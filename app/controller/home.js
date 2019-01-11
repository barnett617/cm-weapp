'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;

    // 示例：请求一个 npm 模块信息
    const result = await ctx.curl('http://101.132.174.1:8082/analysis/', {
      // 必须指定 method
      method: 'POST',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      data: {
        sentence: '开心啦啦啦啦',
      },
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });

    ctx.body = {
      status: result.status,
      headers: result.headers,
      package: result.data,
    };
  }

  async analysis() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    console.log('req.content: ' + req.content);
    // 示例：请求一个 npm 模块信息
    const result = await ctx.curl('http://101.132.174.1:8082/analysis/', {
      // 必须指定 method
      method: 'POST',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      data: {
        sentence: req.content.toString(),
      },
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });

    ctx.body = {
      status: result.status,
      headers: result.headers,
      package: result.data,
    };
  }

  async search() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    console.log('req.content: ' + req.content);
    // 示例：请求一个 npm 模块信息
    const result = await ctx.curl('http://101.132.174.1:8082/analysis/', {
      // 必须指定 method
      method: 'POST',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      data: {
        sentence: req.content.toString(),
      },
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });

    ctx.body = {
      status: result.status,
      headers: result.headers,
      package: result.data,
    };
  }
}

module.exports = HomeController;
