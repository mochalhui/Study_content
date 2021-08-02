//sequence 
async function printFiles() {
    const files = await getFilePaths();
    for (const file of files) {
        const contents = await fs.readFile(file, 'utf8');
        console.log(contents);
    }
}

//parallel
async function printFiles() {
    const files = await getFilePaths();

    await Promise.all(files.map(async (file) => {
        const contents = await fs.readFile(file,'utf8');
        console.log(contents)
    }))
}
//如果想要在循环中使用await 使用for of/for/while循环
//for
(async function(){
    for(let i = 0; i < taskList.length; i++) {
        await taskList[i]();
    }
})();
//for..of
(async function() {
    for( let fn  of taskList) {
        await fn()
    }
})