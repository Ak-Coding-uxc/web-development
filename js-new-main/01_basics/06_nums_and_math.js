const score = 400
// console.log(score)

const balance = new Number(100)// new _object_
// console.log(balance);

// console.log(balance.toString().length);// 3
// console.log(balance.toFixed(2));// used in ecomerce website

const otherNumber = 123.89023

// console.log(otherNumber.toPrecision(4))// presise value need

const hundreds = 100000
// console.log(hundreds.toLocaleString());// comma in numberes

/// +++++++++++++++++ Maths ++++++++++++++++++++++++ // by default library in js.

// console.log(Math);
// console.log(Math.abs(-45));// change only for negative value into positive value(-4 = 4);
// console.log(Math.round(4.3));// round of 4.3  = 4
// console.log(Math.round(4.6)); // 5///
// console.log(Math.ceil(4.3));// ceiling means top(high) .// 5
// console.log(Math.floor(5.6));// floor means bottom(low). // 5

// console.log(Math.sqrt(9));// 3
// console.log(Math.min(5,6.90,4,3,1,22,34));// min value from arry
// not give errors for decima values also

// console.log(Math.max(8,44,3,2,33));// max value

console.log(Math.random());// always in 0 and 1 value. ex:- 0.43454 
console.log((Math.random() * 10) + 1)// +1 for values like 0.04453435
console.log(Math.floor((Math.random() * 10) + 1));

// trick for random values between 2 numbers

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))// 6.6; // 6(floor) - 7(ceiling) =  6








