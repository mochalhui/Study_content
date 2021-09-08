/**
 * 其实之前学过path.resolve，但是今天看见代码的时候还是想不起来了
 * 常思常新啊宝子
 */

 const path = require('path');

 /**
  *  首先cd 到/foo/bar， 此时当前路径为/foo/bar
  *  然后cd ./baz, 此时当前路径就是/foo/bar/baz
  */
 const a = path.resolve('/foo/bar','./baz');// /foo/bar/baz

 /**
  * 首先cd到/foo/bar， 此时路径为/foo/bar
  * 然后cd /baz，此时路径就是/baz
  *  这里 /foo/bar和 /baz是平级的
  */
 const b = path.resolve('/foo/bar','/baz'); // /baz

 //那么项目中的 path.resolve(__dirname, '../../../', 'packages/nest-utils/grpc/protos'),又是什么意思呢

 /**
  * __dirname 当前模块的目录名
  */
 console.log(__dirname) // /Users/zhangjiahui05/Desktop/张漂亮/Study_content/那些我不知道的小知识
 console.log(path.dirname(__filename))// /Users/zhangjiahui05/Desktop/张漂亮/Study_content/那些我不知道的小知识

 /**
  * path.join 看起来就是简单的拼接在一起
  */

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// 抛出 'TypeError: Path must be a string. Received {}'