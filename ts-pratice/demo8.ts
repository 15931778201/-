// 18. 联合类型和相关的类型保护
// 所谓联合类型，可以认为一个变量可能有两种或两种以上的类型。
// 用代码举个例子，声明两个接口Waiter(服务员)接口和Teacher(技师)接口，
// 然后在写一个judgeWho(判断是谁)的方法，里边传入一个animal(任意值)，
// 这时候可以能是Waiter,也可能是Teacher。所以我们使用了联合类型，关键符号是|(竖线)。

interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

// function judgeWho(animal: Waiter | Teacher) {
//   animal.say();
// }

// 但这时候问题来了，如果我直接写一个这样的方法，就会报错，因为judgeWho不能准确的判断联合类型具体的实例是什么。

// 这时候就需要再引出一个概念叫做类型保护，类型保护有很多种方法，这节讲几个最常使用的。

// 类型保护-类型断言
// 类型断言就是通过断言的方式确定传递过来的准确值，比如上面的程序，
// 如果会anjiao（按脚），说明他就是技师，这时候就可以通过断言animal as Teacher,
// 然后直接调用skill方法,程序就不再报错了。
// 同样如果不会按脚，说明就是不同的服务员，这时候调用say()方法，就不会报错了。
// 这就是通过断言的方式进行类型保护。也是最常见的一种类型保护形式。
function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  } else {
    (animal as Waiter).say();
  }
}
// 类型保护-in 语法
// 我们还经常使用in语法来作类型保护，比如用if来判断animal里有没有skill()方法。
// 这里你可以赋值上面的judgeWho()方法，然后改一下名字，我这里改成了judgeWhoTwo()方法，具体程序如下:

function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}

// 19 枚举类型enum
enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA);
// 相当于
// const result = getServe(2);

console.log(`我要去${result}`); // 我要去spa

// console.log(Status.MASSAGE); //1 
// console.log(Status.SPA); // 2
// console.log(Status.DABAOJIAN); // 3
// 反查
console.log(Status.MASSAGE, Status[1]); // 1 'MASSAGE'
