"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iife is, don't worry about it :)
*/

//1.
const isTrue = (x) => x === true

//2.
const isFalse = (x) => x === false

//3.
const not = (x) => !x

//4.
const addOne = (x) => parseFloat(x)+1

//5.
const isEven = (x) => {
    if (x % 2 == 0) {
        return true
    } else {
        return false
    }
}

//6.
const isIdentical = (x, y) => x === y

//7.
const isEqual = (x, y) => x == y

//8.
const or = (x, y) => x || y

//9.
const and = (x, y) => x && y

//10.
const concat = (x, y) => {
    if (typeof x == 'string' && typeof y == 'string') {
        return x.concat(y)
    } else {
        return x.toString() + y.toString()
    }
}