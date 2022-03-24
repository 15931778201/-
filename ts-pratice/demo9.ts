// 20 函数泛型 (难点)
// 编写一个联合类型demo

// function join0(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }
// join0("jspang", ".com");

// 现在有这样一个需求，就是first参数如果传的是字符串类型，要求second也传字符串类型.同理，如果是number类型，就都是number类型。
// 泛型：[generic - 通用、泛指的意思],那最简单的理解，泛型就是泛指的类型。

function join<JSPang>(first: JSPang, second: JSPang) {
  const str = `${first}${second}`;
  console.log(str)
  return str;
}
join<string>("jspang", ".com"); // jspang.com
join<number>(1, 2); // 12

// 泛型中数组使用 
function myFun<ANY>(params: Array<ANY>) {
  console.log(params)
  return params;
}
myFun<string>(["123", "456"]); // [ '123', '456' ]

// 多个泛型定义
function join1<T, P>(first: T, second: P) {
  const str = `${first}${second}`;
  console.log(str)
  return str;
}
join1 < number, string > (1, "2"); // 12

// 泛型也是支持类型推断的，比如下面的代码并没有报错，这就是类型推断的功劳。

function join2<T, P>(first: T, second: P) {
  const str = `${first}${second}`;
  console.log(str)
  return str;
}
join2(1, "2"); // 12
// 但个人不建议大量使用类型推断，这会让你的代码易读和健壮性都会下降，所以这个知识点，大家做一个了解就可以了。




// 21 类中泛型
// 初始类泛型
// class SelectGirl<T> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): T {
//     return this.girls[index];
//   }
// }

// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1)); // 刘英

// 泛型中的继承
interface Girlc {
  name: string;
}

class SelectGirl<T extends Girlc> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" },
]);
console.log(selectGirl.getGirl(1)); // 刘英


// 泛型约束
// class SelectGirla<T extends number | string> {
//   //.....
// }