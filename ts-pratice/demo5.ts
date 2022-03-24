// 10. 类
// 定义一个最简单的Lady类,这里要使用关键字class,类里边有姓名属性和一个得到姓名的方法，代码如下：

class Ladya {
  content = "Hi，帅哥";
  sayHello() {
    return this.content;
  }
}

let goddess = new Ladya();
// console.log(goddess.sayHello());

// 类的继承

// 这里提前说一下 TypeScrip 的继承和ES6中的继承是一样的。关键字也是extends,比如我们这里新建一个XiaoJieJie的类，然后继承自Lady类，在XiaoJieJie类里写一个新的方法，叫做sayLove,具体代码如下。

class XiaoJieJiea extends Ladya {
  sayLove() {
    return "I love you";
  }
}

let goddessa = new XiaoJieJiea();
// console.log(goddessa.sayHello());
// console.log(goddessa.sayLove());


// 类的重写

// 重写就是子类可以重新编写父类里边的代码。现在我们在XiaoJieJie这个类里重写父类的sayHello()方法，比如现在我们觉的叫的不够亲切，我们改成下面这个样子。

class XiaoJieJieb extends Ladya {
  sayLove() {
    return "I love you!";
  }
  sayHello() {
    return "Hi , honey!";
  }
}
// goddessa = new XiaoJieJieb();
// super关键字的使用，比如我们还是想使用Lady类中说的话，但是在后面，加上你好两个字就可以了。
// 这时候就可以使用super关键字，它代表父类中的方法。那我们的代码就可以写成这个样子了。
class XiaoJieJiec extends Ladya {
  sayLove() {
    return "I love you!";
  }
  sayHello() {
    return super.sayHello() + "。你好！";
  }
}
goddessa = new XiaoJieJiec();

console.log(goddessa.sayHello());
console.log(goddessa.sayLove());
