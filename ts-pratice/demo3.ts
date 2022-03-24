
// 04 类型注解和类型推断
let count2: number;
count2 = 123;
// 这段代码就是类型注解，意思是显示的告诉代码，我们的count2变量就是一个数字类型，这就叫做类型注解。

let countInference = 123;
// 这时候我并没有显示的告诉你变量countInference是一个数字类型，
// 但是如果你把鼠标放到变量上时，你会发现 TypeScript 自动把变量注释为了number（数字）类型，
// 也就是说它是有某种推断能力的，通过你的代码 TS 会自动的去尝试分析变量的类型。


// 工作使用问题（潜规则）
// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解

// 不用写类型注解的例子：
const one = 1;
const two = 2;
const three = one + two;

// 用写类型注解的例子：
// function getTotalError(one, two) {
//   return one + two;
// }
// 这里的one和two会显示为any类型
function getTotal(one: number, two: number) {
  return one + two;
}

const total = getTotal(1, 2);

// 当然 TypeScript 也可以推断出对象中属性的类型，比如现在写一个小姐姐的对象，然后里边有两个属性。
const XiaoJieJie = {
  name: "刘英",
  age: 18,
};
// 写完后你把鼠标放在XiaoJieJie对象上面，就会提示出他里边的属性，这表明 TypeScript 也分析出了对象的属性的类型。
// 这时候我们写的代码其实是有一个小坑的，就是我们并没有定义getTotal的返回值类型，
// 虽然TypeScript可以自己推断出返回值是number类型。 但是如果这时候我们的代码写错了，比如写程了下面这个样子。
// 05 函数的参数类型定义和返回值的定义

function getTotalErr(one: number, two: number) {
  return one + two + "";
}

const totalErr = getTotalErr(1, 2);
// 这时错误的根本是getTotal()函数的错误，所以合适的做法是给函数的返回值加上类型注解，代码如下：
function getTotalFinal(one: number, two: number): number {
  return one + two;
}

// 有时候函数是没有返回值的，比如现在定义一个sayHello的函数，这个函数只是简单的terminal打印，并没有返回值。
// 我们就可以给他一个类型注解void，代表没有任何返回值。
function sayHello(): void {
  console.log("hello world");
}

// 如果一个函数是永远也执行不完的，就可以定义返回值为never，
// eg.1
function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}
// eg.2
function forNever(): never {
  while (true) {}
  console.log("Hello JSPang");
}

const totalFinal = getTotalFinal(1, 2);

// 函数参数为对象（解构）
// 坑1
// function getTotalError(one, two) {
//   return one + two;
// }
// 这里的one和two会显示为any类型 坑2
// function getTotal(one: number, two: number) {
//   return one + two;
// }
// 正确写法
// function getTotalFinal(one: number, two: number): number {
//   return one + two;
// }

// 06 数组类型
// 1.一般定义
// const numberArr = [1, 2, 3];
// 加上类型注解
const numberArr: number[] = [1, 2, 3];
//如果数组中有多种类型，比如既有数字类型，又有字符串的时候。只要加个()，然后在里边加上|就可以了，具体看代码
const arr: (number | string)[] = [1, "string", 2];

// 数组中对象类型的定义
// 如果你作过一些项目，你就会知道真实的项目中数组中一定会有对象的出现。那对于这类带有对象的数组定义就稍微麻烦点了。
//  比如现在我们要定义一个有很多小姐姐的数组，每一个小姐姐都是一个对象。这是的定义就编程了这样。
// const xiaoJieJieList: { name: string, age: Number }[] = [
//   { name: "刘英", age: 18 },
//   { name: "谢大脚", age: 28 },
// ];

// 这种形式看起来比较麻烦，而且如果有同样类型的数组，写代码也比较麻烦，
// TypeScript 为我们准备了一个概念，叫做类型别名(type alias)。

// 比如刚才的代码，就可以定义一个类型别名，定义别名的时候要以type关键字开始。现在定义一个Lady的别名。
// 有了这样的类型别名以后哦，就可以把上面的代码改为下面的形式了。

type Lady = { name: string, age: Number };

const xiaoJieJieList: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

// 用类定义
class Madam {
  name: string;
  age: number;
}

const xiaoJieJieList1: Madam[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

// 07 元祖的使用和类型约束
// 我们先来看一个数组和这个数组注解的缺点，比如我们有一个小姐姐数组，数组中有姓名、职业和年龄，代码如下
// const xiaojiejie: (string | number)[] = ["dajiao", "teacher", 28];
// const xiaojiejie: (string | number)[] = ["dajiao", 28, "teacher"];
// 我们只是简单的把数组中的位置调换了一下，但是TypeScript并不能发现问题，这时候我们需要一个更强大的类型，来解决这个问题，这就是元组。
// 元组和数组类似，但是类型注解时会不一样
const xiaojiejie: [string, string, number] = ["dajiao", "teacher", 28];
// 这时候我们就把数组中的每个元素类型的位置给固定住了，这就叫做元组。

// 如果你维护老系统，你会发现有一种数据源时CSV,这种文件提供的就是用逗号隔开的，如果要严谨的编程就需要用到元组了。例如我们有这样一组由CSV提供的（注意这里只是模拟数据）。
// "dajiao", "teacher", 28;
// "liuying", "teacher", 18;
// "cuihua", "teacher", 25;

// 如果数据源得到的数据时这样的，你就可以使用元组了。

const xiaojiejies: [string, string, number][] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];
