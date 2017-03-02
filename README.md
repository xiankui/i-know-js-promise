# I Promise

## 缘起

* 缓解回调嵌套情况
* 提供规范化的回调解决方案
* 使异步看起来更像是同步

## 什么是承诺

* 承诺是一种带有状态和值的特殊对象
* 承诺只有三种状态：pending resolved (fulfilled rejected) rejected
* 承诺对应两种结果：onFulfilled onRejected
* 承诺一旦兑现，状态就不可改变；pending -> resolved || pending -> rejected
* 承诺兑现后，返回一个新的承诺，形成承诺链，没有终止
* 承诺尾部用catch来接收拒绝或错误

## 承诺的标准方法

* .then()
* .catch()

## 承诺的四个静态方法

* Promise.resolve()
  - 包装非标准承诺（如then方法的对象，jQuery.ajax等）
  - 包装简单值
  - 生成resolved状态的标准承诺

* Promise.reject()

	- 返回rejected状态的标准承诺

* Promise.all([])

  - 多个承诺并行执行

* Promise.race([])

  - 多个承诺竞态执行

## 参考

* [promises-book](http://liubin.org/promises-book/)
* [promisejs.org](https://www.promisejs.org/)