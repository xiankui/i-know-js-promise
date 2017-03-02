/**
 * 平行执行
 * Promise.all([])
 */

var p = Promise.all([]);
console.log(p)  // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: Array[0]}


var p1 = Promise.resolve('hello');

var p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('world')
	}, 100)
})

var p3 = Promise.reject('o no error')

Promise.all([p1, p2]).then(function onFulfilled([x, y]) {
	console.log(x, y)  // hello world
}).catch(err => {
	// 如果有一个被拒绝，则作拒绝处理
})


Promise.all([p1, p3]).then().catch(err => {
	console.error(err)  // o no error
})