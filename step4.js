/**
 * 由于promise的状态一旦兑现就是不可逆的，因此也是不可变的
 * 那错误的捕捉？
 */

var p = new Promise((resolve, reject) => { resolve('hello world') })

p.then(function onFulfilled(res) {
	obj.a;  // 错误没有被捕捉到
}, function rejected(err) {
	console.error(err)
})


// 总是使用catch放在尾部会好一点
var p1 = Promise.resolve('catch the error')

p1.then(function onFulfilled(res) {
	so.a;
}).catch(err => {
	console.error(err)  // ReferenceError: so is not defined at onFulfilled
})


var p2 = Promise.reject('rejected error');
p2.then(function onFulfilled(argument) {
	he.a;
}).catch(err => {
	console.error(err)  // rejected error
})