## 让小张的代码变聪明
___

 1. 默认使用const, 确实需要改变再使用let,避免意料之外的变量修改引发bug
 2. 模版字符串宝子！！   
   ```
   const foo = `hihi${world}`;
   ```
 3. 优先使用箭头函数➡️
   ```
   
   ```
  4. 在nestjs中,可以使用`nest g user(自定义名称)` ，注意是在根目录，可以生产你想要的模块

  5. 在node.js中，service中的变量记得`private`，防止被外部引用更改（因为service都是export）

  6. 调用传入参数的一个好习惯
  ```typescript
   createTask(createTask: CreateTaskDto): Task{

        const {title, description} = createTask
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        }
        this.tasks.push(task);
        return task;
    }
  ```
  而不要`createTask.title , createTask.description`去调用，不漂亮不美观

