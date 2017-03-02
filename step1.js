/**
 * promise 是一个新的对象子类型；
 */

const p = new Promise(() => {});

console.log(Object.prototype.toString.call(p))

// [object Promise]

// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}


/**
 * object and his children
 */
const obj = {};
const fn = function () {};
const arr = [];
const arr_i = [][Symbol.iterator]();
const gen = function *() {};
const g = gen();
const promise = Promise.resolve();
const asyncFn = async function () {};


console.log(Object.prototype.toString.call(obj))
console.log(Object.prototype.toString.call(fn))
console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(arr_i))
console.log(Object.prototype.toString.call(gen))
console.log(Object.prototype.toString.call(g))
console.log(Object.prototype.toString.call(promise))
console.log(Object.prototype.toString.call(asyncFn))


// [object Object]
// [object Function]
// [object Array]
// [object Array Iterator]
// [object GeneratorFunction]
// [object Generator]
// [object Promise]
// [object AsyncFunction]

