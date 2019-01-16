/**
 * var let const
 * var 全局性
 * let 局部声名
 */
let a = 1
console.log(a)

var a = 2; 
{
    var a = 3;
}
console.log(a); //3

var a = 2; 
{
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
const [a,b,c,d,e,f]="JSPang";//字符串解构

//对象解构赋值    
//数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
//小括号
let foo;
({foo} ={foo:'JSPang'});
console.log(foo); //控制台输出jspang