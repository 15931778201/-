// 22. 初始命名空间 namespace
// 命名空间声明的关键词是namespace 比如声明一个namespace Home,需要暴露出去的类，可以使用export关键词，这样只有暴漏出去的类是全局的，其他的不会再生成全局污染了。修改后的代码如下：
namespace Home {
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}