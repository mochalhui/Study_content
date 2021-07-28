var data = [];
for (let i = 0; i < 3; i++) {
    (data[i] = function () {
        console.log(arguments.callee.i)
    }).i = i;
}
data[0]();//0
data[1]();//1
data[2]();//2

//这是我学习arguments的时候看到的 但是我现在完全不理解