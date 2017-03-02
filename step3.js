/**
 * promise是一种带有状态和值的特殊对象
 *
 * 从承诺到结果，promise只有三种状态：pending resolved(决议) rejected
 * 决议有两种情况：fulfilled(履行) rejected
 * 因此承诺的结果只有两种：履行、拒绝
 * 
 * 承诺的状态是不可逆的，只有两种情况：pending -> resolved || pending -> rejected
 *
 * 每次的承诺兑现（ .then() ）又会返回新的承诺，形成promise-chain
 */


var p = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve('fulfilled')
	}, 300);

	setTimeout(function () {
		reject('rejected')
	}, 200)
})

var f = p.then(function onFulfilled(res) {
	console.log(res)  // fulfilled

	console.log(p)  // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: "fulfilled"}

}, function onRejected(err) {
	console.error(err)  // rejected

	console.log(p)  // Promise {[[PromiseStatus]]: "rejected", [[PromiseValue]]: "rejected"}
})


console.log(p) // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}

// p.then() return another promise
setTimeout(() => {
	console.log('p.then return another promise', f)  // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: undefined}
}, 1000)


////////////////////////////////////////// promise chain
f.then().then().then(() => {
	// return 'amazing promise chain';

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('amazing promise chain')
		}, 2000)
	})
}).then(function onFulfilled(res) {
	console.log(res)  // amazing promise chain
}).catch(function onRejected(err) {
	//
	console.error(err)
})


