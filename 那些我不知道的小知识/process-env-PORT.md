## What is the `process.env.PORT` in Node.js
---
在代码里随处可见
`const port = process.env.PORT || 9000 ;`
这是为了集体开发时，你自己9000端口号可以使用，别人可能被别的项目占用了，那他就可以`PORT=3333 node index.js`启动