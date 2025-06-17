// 如何用闭包优化fib
// 记忆功能
function memoizedFib() {
    // 闭包 1.函数嵌套函数
    // 自由变量
    const cache = {};
    return function fib(n) {
        if (n <= 1) return n;// 退出条件
        if (cache[n]) return cache[n];// 重复计算
        cache[n] = fib(n - 1) + fib(n - 2);// 计算结果
        return cache[n];// 返回结果
      
    }
}
// 可以在外部访问
const fib = memoizedFib();
console.log(fib(20)); 