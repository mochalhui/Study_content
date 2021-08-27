## Node.js中`process.hrtime()`获取纳秒级的计时精度
---
#### 「在Node.js中，优先使用process.hrtime()，然后是performance.now()，最后才是Date.now()」
#### 原因是：`精度`,`时间同步`

---
1. Date.now()缺点
- 返回的实际是【毫秒】级别，精度不够 ❌
- 受到系统时间影响，也有可能被其他软件调整所影响❌
2. hrtime()特点
- 呈一个单调增长的特性，monotonic increasing,
- 和系统始终不相关
- 精度【纳秒】级别
- 不存在 时钟漂移
3. performance.now()
- 精度【微秒】
- 存在时钟漂移 ❌

---
### 咋用呢？
```
const time = process.hrtime();
const diff = process.hrtime(time);
const value = hrtime[0] * 1e9 + hrtime[1];
```
#### 值得注意的是 `process.hrtime(time)`的返回值是`[s,ms]`

---
小知识 `hrtime.bigint()`
```
const start = process.hrtime.bigint();
const end = process.hrtime.bigint();
const diff = end - start
```

