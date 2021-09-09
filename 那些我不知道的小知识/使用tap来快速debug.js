/**
 * 来源：https://www.jstips.co/zh_cn/javascript/tapping-for-quick-debugging/
 */

function tap(x) {
    console.log(x);
    return x;
}
function tap_two(x,fn = x => x) {
    console.log(fn(x));
    return x;
}