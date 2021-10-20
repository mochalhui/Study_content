function flat(arr, depth = 1){
    if(depth === 0 ) {
        return arr;
    }
    let buff = []
    for(let i = 0 ; i < arr.length ; i++){
        buff = buff.concat(arr[i])
    }
    if(JSON.stringify(buff)== JSON.stringify(arr)){
        return arr;
    }
    depth --;
    return flat(buff, depth)

   
}
const arr = [1, [2], [3, [4]]];
console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 15))