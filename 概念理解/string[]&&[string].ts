/**
 * 首先要明确，string[]和[string]是两个东西
 * string[]是array 数组
 * [string]是tuple 元组
 * 
 * 愚蠢小张上线
 * 编译过后，tuple在js里就是array
 */

 //所以元组tuple到底是什么！
 //先记住一句话 元组非常有用 但有点疯狂 基于JavaScript的语言怎能不疯狂 哈哈哈哈哈哈哈哈哈😄

 type FixedArray = [string, number, string];
 const mixedArray : FixedArray = ['a', 2, 'b'];

 const first = mixedArray[0];//string
 const second = mixedArray[1];//number
 //可以看出来这是一个固定长度的‘数组’
 console.log(typeof mixedArray)//object
 console.log(typeof ['1','2'])//object
 console.log(Array.isArray(mixedArray))//true
 console.log(Array.isArray(['1','2']))//true
 console.log(mixedArray instanceof Array)//true
 console.log(['1','2'] instanceof Array)//true
 //更新版本的tuple不允许再const forth = mixedArray[3] 会报错


