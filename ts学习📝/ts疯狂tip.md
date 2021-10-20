### 持续学习ts的每一天
---
1. `keyof any extends symbol｜string|number`
2. 
- 可以用来区分 {}和object.`{} extends Record<string,string>` 
-  因此keyof不能区分any和never
```
keyof any extends symbol|string|number
keyof never extends symbol|string|number
```
- 判断是否是never应该`[T] extends [never]`