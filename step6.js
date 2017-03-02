/**
 * 竞态条件
 * Promise.race()
 */

var p = Promise.race([]);
console.log(p)  // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}

var p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('ok')
	}, 1000)
})

var timeoutPromise = function (time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('timeout!')
		}, time)
	})
}

Promise.race([p1, timeoutPromise(500)]).then(res => {
	console.log(res)
}).catch(err => {
	console.error(err)  // timeout!
})