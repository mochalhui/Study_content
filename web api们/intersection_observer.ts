const handleScroll = () => {
    const headers = context.root['$page'].headers;
    const idList = (headers as { slug: string }[])?.map(item => {
        return `#${item.slug}`;
    });
    var io = new IntersectionObserver(
        entries => {
            entries?.forEach(entry => {
                if (entry.boundingClientRect.y < 220) {
                    activeId.value = clickId.value ? clickId.value : entry.target.id;
                    clickId.value = '';
                }
            });
        },
        {
            rootMargin: '-120px 0px 0px 0px',
        },
    );
    if (idList && idList.length) {
        idList.forEach(item => {
            io.observe(document.querySelector(item)!);
        });
    }
};
//上面是我的一个例子用来举例说明一下在生产中如何使用
 /**
  * 1. new IntersectionObserver(cb,options)
  * cb就是发生变化时候的执行的回调函数
  * options就是指定观察者元素在这里由于没有写所以就是viewport
  * 2. 由于在options中没有指定thresholds 所以默认为0，也就是target和viewport触发里0就会执行回调就是时时刻刻执行回调
  * 3. 执行回调后会检查元素具体操作了
  */