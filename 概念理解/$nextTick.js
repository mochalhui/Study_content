//来源文章 https://juejin.cn/post/6980295388079063048#heading-0

//自己最能接受的用途是:有一些很连续的操作中进行了重排，会出现undefined，所以nextTick会等dom渲染好了再立即执行操作

//生命周期mounted渲染的时候，不能百分百保证所有子组件都会被渲染，所以再mounted里面使用this.$nextTick 这样就可以保证所有子组件都可以被渲染

//mounted钩子再服务器渲染期间不会被调用

mounted:function() {
    this.$nextTick(function(){
        //在数据发生变化，重新在视图上发生渲染后，再执行里面的方法
        //等同于
        //讲回调延迟到下次DOM更新循环之后执行
        //等同于
        //再修改数据之后，然后等待DOM更新之后再执行
    })
}