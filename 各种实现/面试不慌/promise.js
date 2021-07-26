//promise三种状态
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(func) {
    this.status = PENDING;
    this.value = null;
    this.error = null;

    //动动脑 一般我们使用promise的时候，new Promise(func).then(onResolve,onRejected)，
    //所以要等func的操作结束，才能then，我们又怎么能知道结束了呢！还是看status
    this.resCallback = [];
    this.rejCallback = [];

    function resolve(val) {
        if (this.status === PENDING) {
            this.value = val;
            this.status = RESOLVED;

            this.resCallback.forEach(callback => {
                callback(val)
            })
        }
    }

    function reject(err) {
        if (this.status === PENDING) {
            this.error = err;
            this.status = REJECTED;

            this.rejCallback.forEach(callback => {
                callback(err);
            })
        }
    }




    //最后要将resolve和reject作为参数调用传进来的参数 try catch
    try {
        func(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
//可以被链式调用的then实例方法，所以放在prototype上
MyPromise.prototype.then = function (onResolved, onRejected) {
    //规范，如果onResolved和onRejected都不是函数，就“忽略”，对于onResolved的忽略就是return value，对于onRejcted就是throw error

    //实操：如果onResolved不是函数，那就给他一个函数，让他返回值
    let realResFunc = onResolved;
    if (typeof realResFunc !== 'function') {
        realResFunc = function (val) {
            return val;
        }
    }

    //同理对onRejected
    let realRejFunc = onRejected;
    if (typeof realRejFunc !== 'function') {
        realRejFunc = function (err) {
            throw err;
        }
    }

    //上面对工作主要是在做参数检查
    //then的主要功能是，当我们调用promise，如果成功就then的onResolved，失败就then的onRejcted，那我们怎么知道失败与否呢？ status

    //then需要返回promise因为经常会出现 promise2 = promise1.then(res,rej)
    //如果返回val 那么promise2 也返回val 如果promise1 抛出err 那么promise2拒绝执行，返回err
    if (this.status === RESOLVED) {

        let result = new MyPromise(function (res, rej) {
            setTimeout(function(){
            try {
                // onResolved(this.value);//之所以放在里面是不一定成功 
                //如果onResolved不是函数，且promise1成功执行，result必须车管能够给你执行并返回相同的值
                if (typeof realResFunc !== 'function') {
                    res(this.value);
                } else {
                    // res(this.value);
                    // onResolved(this.value);
                    //如果onResolved返回一个值x就是更复杂的过程了，之前的都是resolve或者reject成功执行了
                    resolvePromise(result, onResolved, res, rej);
                }
            } catch (e) {
                rej(e);
            }
            },0)
        
        })
        return result;
    }
    if (this.status === REJECTED) {
        let result = new MyPromise(function (res, rej) {
            setTimeout(function(){
            try {
                //  onRejected(this.error)
                //这里同样要判断
                if (typeof realRejFunc !== 'function') {
                    rej(this.error);
                } else {
                    onRejected(this.error);
                    resolve() //这里是resolve是因为，如果promise1的onRejected执行成功了，promise2应该被resolve
                }
            } catch (e) {
                rej(e)
            }})
        })
        return result;
    }

    //在funcion MyPromise里创建了回调数组，所以如果pending的话，就把callback push进去
    if (this.status === PENDING) {
        //不能再简单的push了，也需要try catch catch住错误
        // this.resCallback.push(onResolved);
        // this.rejCallback.push(onRejected);
        let result = new MyPromise(function (res, rej) {
            this.resCallback.push(() => {
                try {
                    onResolved(this.value);
                } catch (e) {
                    rej(e);
                }
            })
            this.rejCallback.push(() => {
                try {
                    onRejected(this.error);
                } catch (e) {
                    rej(e);
                }
            })
        })
        return result;
    } //这种暂时保存回调，条件满足再拿出来运行，---> 订阅发布模式！！！




}


function resolvePromise(promise, x, resolve, reject) {
    // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
    // 这是为了防止死循环
    if (promise === x) {
        return reject(new TypeError('The promise and the return value are the same'));
    }

    if (x instanceof MyPromise) {
        // 如果 x 为 Promise ，则使 promise 接受 x 的状态
        // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
        // 这个if跟下面判断then然后拿到执行其实重复了，可有可无
        x.then(function (y) {
            resolvePromise(promise, y, resolve, reject);
        }, reject);
    }
    // 如果 x 为对象或者函数
    else if (typeof x === 'object' || typeof x === 'function') {
        // 这个坑是跑测试的时候发现的，如果x是null，应该直接resolve
        if (x === null) {
            return resolve(x);
        }

        try {
            // 把 x.then 赋值给 then 
            var then = x.then;
        } catch (error) {
            // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
            return reject(error);
        }

        // 如果 then 是函数
        if (typeof then === 'function') {
            var called = false;
            // 将 x 作为函数的作用域 this 调用之
            // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
            // 名字重名了，我直接用匿名函数了
            try {
                then.call(
                    x,
                    // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                    function (y) {
                        // 如果 resolvePromise 和 rejectPromise 均被调用，
                        // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                        // 实现这条需要前面加一个变量called
                        if (called) return;
                        called = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    function (r) {
                        if (called) return;
                        called = true;
                        reject(r);
                    });
            } catch (error) {
                // 如果调用 then 方法抛出了异常 e：
                // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
                if (called) return;

                // 否则以 e 为据因拒绝 promise
                reject(error);
            }
        } else {
            // 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
}
//这不是我的代码，只是我学习的时候从google学到的
//有一些部分还不是很理解，日后多复习

//下面搞一搞api
MyPromise.resolve = function(parameter) {
    if (parameter instanceof MyPromise){
        return parameter;
    } 
    return new MyPromise(function (res) {
        res(parameter)
    })
}

MyPromise.reject = function(parameter) {
    return new MyPromise(function(res,rej) {
        rej(parameter)
    })
}

MyPromise.all = function (arr) {
    return new MyPromise(function(res,rej){
        let result = [];
        let length = arr.length;
        let count = 0;
        if(length === 0) {
            return res(result);
        }

        arr.forEach(function(item,index){
            MyPromise.resolve(item).then(function(value){
                count++;
                result[index] = value;

                if(count === length){
                    res(result);
                }
            }, function(error){
                rej(error);
            })
        })
    })
  
}

MyPromise.race = function (arr) {
    return new MyPromise(function(res,rej){
        let length = arr.length;
        if(length === 0) {
            return res();
        } else {
            for (let i = 0; i < length; i ++) {
                MyPromise.resolve(arr[i]).then(function(value){
                    return res(value);
                },function(error){
                    return rej(error)
                })
            }
        }

    })
   
}