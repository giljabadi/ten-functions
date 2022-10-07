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
const isTrue = (x) => x ? true : false

//2.
const isFalse = (x) => x ? false : true

//3.
const not = (x) => {
    if (x === false || x === null ||  x=== undefined || x === "" || x === 0) {
        return true

    } else if (isNaN(x)==true) {
        return true
    }
    else {
        return false
    }
}

//4.
const addOne = (x) => parseInt(x)+1

//5.
const isEven = (x) => x%2==0 ? true : false

//6.
const isIdentical = (x, y) => x===y ? true : false

//7.
const isEqual = (x, y) => x==y ? true : false

//8.
const or = (x, y) => x || y

//9.
const and = (x, y) => x && y

//10.
const concat = (x, y) => x + y
