// 08 interface 接口
// 上节课我们学了一个类型别名的知识可以解决代码重复的问题，
// 这节课我们就学习一个更常用的语法接口（Interface）.

// 我们可以把这两个重复的类型注解，定义成统一的接口。代码如下：

interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // 非必选值定义 就是在:号前加一个?
  [propname: string]: any; // 任意值
  say(): string; // 方法定义

}

// 这时候我们代码就显得专业了很多，以后再用到同样的接口也不怕了，直接使用girl就可以了。
const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline); // 非必选值
  girl.sex && console.log(girl.name + "性别是：" + girl.sex); // 任意值
};

const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
  sex: "女", // 任意值
  // 加上这个say()方法后，程序马上就会报错，因为我们对象里没有 say 方法。那我们就要给对象一个 say 方法
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
};

// screenResume(girl);
// getResume(girl);

// 类型别名与接口的区别 
// 类型别名可以直接给类型，比如string，而接口必须代表对象。

// 比如我们的类型别名可以写出下面的代码：
type Girl1 = string;
// 但是接口就不能这样写，它必须代表的是一个对象，也就是说，你初始化girl的时候，必须写出下面的形式.
const girl1 = {
  name: "大脚",
  age: 18,
  bust: 94,
};

// 09 interface 接口2
// 接口和类的约束
class XiaoJieJie2 implements Girl {
  name = "刘英";
  age = 18;
  bust = 90;
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  }
}

// 接口继承
interface Teachera extends Girl {
  teach(): string;
}
// 比如这时候老板说了，只看 Teacher 级别的简历，那我们需要修改getResume()方法。

const getResumeTeacher = (girl: Teachera) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是：" + girl.sex);
  console.log(girl.say() + girl.teach())
};
const girle = {
  name: "大脚",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！";
  },
  teach() {
    return "我是一个老师！";
  },
};
getResumeTeacher(girle);

