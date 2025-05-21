// 申明了对象常量
// 内存中开辟了一个空间，里面存放了一个对象
// hn 取址 & 变量名是地址的标记
// js是弱类型语言 变量的类型由值决定
// = 赋值 Object
// 对象字面量(字面意义上) JSON
// JS 太灵活，不需要new，通过{}拿到对象 [] 拿到数组

// js 灵活
const hn = {
    name:'红男',// key value String
    tall:185,// Number 数值类型
    age:22,// Number 数值类型
    hometown:'江西抚州',// String 字符串类型
    isSingle:true,// Boolean 布尔类型
    sendFlower:function(girl){
      console.log(hn.name + '给' + girl.name + '送了99朵玫瑰');
      girl.receiveFlower(hn);
    }    // 函数类型
};

const xx = {
    name:'小璇',
    age:20, 
    receiveFlower:function(sender) {
        console.log('收到了' + sender.name + '送的99朵玫瑰');
        if(xx.xq > 90) {
            console.log('硕果走一波');
        } else {
            console.log('gun ~~~~');
        }
    }
};
// 帮红男的 小璇的闺蜜
const hei = {
    name:'黑女',
    age:20,
    room:'417',
    hometown:'抚州', // 老乡
    // 送小美，送小红，都具有receiveFlower 方法
    // 对象互换
    // 接口 interface
    receiveFlower:function(sender) {
        // if(sender.name === '红男') {
        //     console.log('红哥哥，让我们在一起吧');
        //     return
        //   }
        setTimeout(() => {
            xx.xq = 99;
            xx.receiveFlower(sender)
        }, 3000);
        // xx.receiveFlower(sender);
    }
}    

hn.sendFlower(hei);

