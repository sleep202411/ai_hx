// let a:any = 1; // any 任何类型，ts新手，狂用any
// a = '1' // 不能滥用，学会用泛型
// function getFirstElement(arr:any[]):any {
//     return arr[0]
// }
// // 复用性，函数参数，返回值 指定类型
// const numbers = [1,2,3];
// const firstNum = getFirstElement(numbers);
// firstNum.toFixed(2)
// const strs = ["a","b","c"];
// const firstStr = getFirstElement(strs);

// 复用这个函数的同时，传个类型参数

function getFirstElement<T>(arr:T[]):T | undefined {
    return arr.length > 0 ?arr[0]:undefined
}

const strings = ["hello","world"]
const firstString=getFirstElement(strings);// ts会自动推导类型

const firstNum = getFirstElement<number>([1,2,3]);
const firstStr = getFirstElement<string>(["a","b","c"]);
firstNum?.toFixed(2)