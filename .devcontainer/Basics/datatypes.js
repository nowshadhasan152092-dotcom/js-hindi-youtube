"use strict"; // treat all js code as newer version

// alert(3 + 3) ❌ Node.js এ কাজ করবে না

console.log(3 + 3) // code readability should be high

console.log("Nowshad")

let name = "Nowshad"
let age = 25
let isLoggedIn = false

// number => 2^53 পর্যন্ত safe
// bigint => বড় number
// string => ""
// boolean => true or false
// null => empty value
// undefined => not assigned
// symbol => unique

// object => key-value pairs

console.log(typeof "Nowshad");   // string
console.log(typeof age);         // number
console.log(typeof null);        // ⚠️ object (JS bug)
console.log(typeof undefined);   // undefined