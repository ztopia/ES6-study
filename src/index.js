/**
 * var let const
 * var 全局性
 * let 局部声名
 */
let a = 1
console.log(a)

var a = 2; {
    var a = 3;
}
console.log(a); //3

var a = 2; {
    let a = 3;
}
console.log(a); //2

/**
 * 解构赋值
 * 从数组和对象中提取值，对变量进行赋值，这被称为解构。
 */

//数组解构赋值
let [a, [b, c], d] = [1, [2, 3], 4];
//默认值
let [foo = true] = [];
let [a, b = "JSPang"] = ['技术胖'] //console.log(a+b) ,控制台显示“技术胖JSPang”
let [a, b = "JSPang"] = ['技术胖', undefined]; //undefined相当于什么都没有，b是默认值。
let [a, b = "JSPang"] = ['技术胖', null]; //null相当于有值，但值为null。所以b并没有取默认值，而是解构成了null。
const [a, b, c, d, e, f] = "JSPang"; //字符串解构

//对象解构赋值    
//数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
let {
    foo,
    bar
} = {
    foo: 'JSPang',
    bar: '技术胖'
};
//小括号
let foo;
({
    foo
} = {
    foo: 'JSPang'
});
console.log(foo); //控制台输出jspang

/**
 * 扩展运算符
 */

//传入的参数是不确定
function jspang(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
jspang(1, 2, 3);

//进行深拷贝
let arr1 = ['www', 'jspang', 'com'];
//let arr2=arr1;浅拷贝
let arr2 = [...arr1]; //深拷贝。
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

// rest运算符 ...
function jspang(first, ...arg) {
    console.log(arg.length); // 7
    for (let val of arg) {
        console.log(val); //for 循环
    }
}
jspang(0, 1, 2, 3, 4, 5, 6, 7);

/**
 * 模板语法
 */

let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
let result = `${a+b}`;
blog.includes(jspang) //true or false
blog.startsWith(jspang);
blog.endsWith(jspang);
document.write('jspang|'.repeat(3));

/**
 * 数组相关
 */

let json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length: 3 //必须
}
let arr = Array.from(json);
console.log(arr)

let arr = Array.of('技术胖', 'jspang', '大胖逼逼叨');
console.log(arr);

//value：表示当前查找的值。
//index：表示当前查找的数组索引。
//arr：表示当前数组
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.find(function (value, index, arr) {
    return value > 5;
}))

//第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
let arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('jspang',2,5);
console.log(arr);

//for of 输出数组索引和数值
let arr=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr.entries()){
    console.log(index+':'+val);
}

// entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。我们来看下面的代码：
let arr=['jspang','技术胖','大胖逼逼叨']
let list=arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

// 数组的遍历方法
let arr=['jspang','技术胖','前端教程'];
arr.forEach((val,index)=>console.log(index,val));//筛空
arr.filter(x=>console.log(x));
arr.some(x=>console.log(x));
console.log(arr.map(x=>'web'));//map在这里起到一个替换的作用，这个我们后续课程会详细讲解。

// 数组输出成字符串的形式
let arr=['jspang','技术胖','前端教程'];
console.log(arr.join('|'));
console.log(arr.toString());
/**
 * 函数
 */
function add(a,b){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}
console.log(add.length);//得到参数的方法(xxx.length).需要传递的参数个数。

