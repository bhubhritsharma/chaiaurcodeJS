// data-types conversion

let score = 30
// console.log(typeof score);

score = "30"
// console.log(typeof score);   

let value = Number(score)
// console.log(typeof value);

value = Number("30abc")
console.log(typeof value, value);

// "33" -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0

let isLoggenIn = 1;
let booleanIsLoggedIn = Boolean(isLoggenIn)
console.log(booleanIsLoggedIn);

// 0 -> false
// 1 -> true
// "Bhubhrit" -> true
// "" -> false
