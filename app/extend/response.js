/**扩展request对象
 *Response 对象和 Koa 的 Response 对象相同，是 请求级别 的对象，它提供了大量响应相关的属性和方法供使用。
 *访问方式
 *ctx.response
 *ctx 上的很多属性和方法都被代理到 response 对象上，对于这些属性和方法使用 ctx 和使用 response 去访问它们是等价的，例如 ctx.status = 404 和 ctx.response.status = 404 是等价的。
 *Koa 内置的代理 response 的属性和方法列表：Koa Response aliases
 */
module.export = {};
