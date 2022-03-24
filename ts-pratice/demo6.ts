// 11. 类的访问类型

// public 属性
class Person {
  // name!: string;
  // 相当于
  // public name!:string;
  // private name!:string;
  protected name!:string;
  public sayHello(){
      console.log(this.name + ' say Hello')
  }
}


// 如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性。
// public从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用.

//-------以下属于类的外部--------
let person = new Person()
// person.name = 'jspang.com'
// person.sayHello()
// console.log(person.name) 
// jspang.com say Hello
// jspang.com

// private 属性
// private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用
// 比如现在我们把 name 属性改成private,这时候在类的内部使用不会提示错误，而外部使用VSCode直接会报错。

// protected 属性
// 允许在类内及继承的子类中使用
class Teacher extends Person{
  public sayBye(){
      this.name;
  }
}

// 12. 类的构造函数
class Persona {
  constructor(public name: string) { }
}
// 相当于
// class Persona {
//   public name :string ;
//   constructor(name:string){
//       this.name=name
//   }

// }
const persona = new Persona('jspang')
persona.name = '谢广坤'
// console.log(persona.name)

// 类继承中的构造器写法
class Teachera extends Persona {
  constructor(public age: number) {
    super('jspang')
  }
}
// 这就是子类继承父类并有构造函数的原则，
// 就是在子类里写构造函数时，必须用super()调用父类的构造函数，
// 如果需要传值，也必须进行传值操作。
// 就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
const teacher = new Teachera(18)
// console.log(teacher.age)
// console.log(teacher.name)

// 13 Getter Setter static
class Xiaojiejie {
  constructor(private _age: number) { }
  get age() {
    return this._age - 10
  }
  set age(age: number) {
    this._age = age + 3
  }
}

const xiaoli = new Xiaojiejie(28)
// xiaoli.age = 25
// console.log(xiaoli.age)

// static声明的属性和方法，不需要进行声明对象，就可以直接使用，代码如下。
// 如我们先写一下最常规的写法：

// class Girl {
//   sayLove() {
//     return "I Love you";
//   }
// }

// const girl = new Girl();
// console.log(girl.sayLove());

class Girl {
  static sayLove() {
    return "I Love you";
  }
}
// console.log(Girl.sayLove());


// 14.只读属性 和抽象
// 只读
class Personb {
  public readonly _name :string; // 只读 readonly
  constructor(name:string ){
      this._name = name;
  }
}
// 抽象类
// 什么是抽象类那？我给大家举个例子，比如我开了一个红浪漫洗浴中心，里边有服务员，有初级技师，高级技师，每一个岗位我都写成一个类，那代码就是这样的。（注释掉刚才写的代码）

// class Waiter {}
// class BaseTeacher {}
// class seniorTeacher {}

// 抽象类的关键词是abstract,里边的抽象方法也是abstract开头的，现在我们就写一个Girl的抽象类。
abstract class Girlb{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号
}
class Waitera extends Girl{
  skill(){
      console.log('大爷，请喝水！')
  }
}

class BaseTeacher extends Girl{
  skill(){
      console.log('大爷，来个泰式按摩吧！')
  }
}

class seniorTeacher extends Girl{
  skill(){
      console.log('大爷，来个SPA全身按摩吧！')
  }
}
// const personb = new Personb('jspang')
// personb._name= '谢广坤'
// console.log(personb._name)
// 这样写完后，VSCode就回直接给我们报错，告诉我们_name属性是只读属性，不能修改。

