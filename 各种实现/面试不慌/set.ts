
function set<T extends object>(obj: T, path: string | string[], value: any) {
  const pathArr = typeof path === 'string' ? path.split('.'): path;
  if(pathArr[0] in  obj){
    console.log(obj.call(this, pathArr[0]))
  }
 // let m = obj.pathArr[0] ? obj.pathArr[0] : obj;
}
const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}
set(obj, 'a.b.c', 'BFE')
  