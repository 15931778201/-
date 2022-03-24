// 02 静态类型

// 定义静态类型
const count: number = 1 
// 最简单的定义一个数字类型的count的变量，这里的: number就是定义了一个静态类型
// 定义后count这个变量在程序中就永远都是数字类型了，不可以改变了
count.toString()

// 自定义静态变量
interface XiaoJieJie {
  uname: string;
  age: number;
}


const xiaohong: XiaoJieJie = {
  uname: "小红",
  age: 18,
};

// 如果使用了静态类型，不仅意味着变量的类型不可以改变，
// 还意味着类型的属性和方法也跟着确定了。
// 这个特点就大大提高了程序的健壮性，并且编辑器这时候也会给你很好的语法提示，加快了你的开发效率。

// 03 基础静态类型&对象类型
// 在 TypeScript 静态类型分为两种，一种是基础静态类型，一种是对象类型，这两种都经常使用，非常重要

// 基础静态类型
// 只要在声明变量的后边加一个:号，然后加上对应的类型哦。比如下面的代码，就是声明了一个数字类型的变量，叫做count1。
const count1: number = 918;
const myName1: string = 'jspang'
// 常用的基础类型还有，我这里就举几个最常用的哦,null,undefinde,symbol,boolean，void这些都是最常用的基础数据类型
 
// 对象类型  
// 1. 对象类型
const xiaoJieJie: {
  name: string,
  age: number,
} = {
  name: "大脚",
  age: 18,
};
console.log(xiaoJieJie.name); // 大脚

// 2. 数组类型
const xiaoJieJies: String[] = ["谢大脚", "刘英", "小红"];

// 3. 类类型
class Persion { }
const dajiao: Persion = new Persion()
// 4. 函数类型
const jianXiaoJieJie: () => string = () => {
  return "大脚"
}
// 总结一下对象类型可以有几种形式：

// 对象类型
// 数组类型
// 类类型
// 函数类型
// 这几种形式我们在TypeScript里叫做对象类型。

