/**扩展context对象
 *
 * middleware 中 this 就是 ctx，例如 this.cookies.get('foo')。
 *controller 有两种写法，类的写法通过 this.ctx，方法的写法直接通过 ctx 入参。
 *helper，service 中的 this 指向 helper，service 对象本身，使用 this.ctx 访问 context 对象，例如 this.ctx.cookies.get('foo')。
 */
module.export = {};
