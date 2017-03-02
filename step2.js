/**
 * 鸭子类型
 * Promise.resolve 同样可以使 jQuery.Deffer 转化为标准的promise
 */
var duck = {
	then: function (cb, errcb) {
		cb('ok');
		errcb('error');
	}
}


duck.then(function (res) {
	console.log(res)
}, function (err) {
	console.error(err)
})

// ok
// error

console.log('***************duck vs promise*****************')

var real = Promise.resolve(duck);

real.then(function (res) {
	console.log(res)
}, function (err) {
	console.error(err)
})

// ok