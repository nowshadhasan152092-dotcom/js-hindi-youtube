"use strict"; // modern JS mode

// =======================
// 🔢 STRING → NUMBER
// =======================

let score = "33"

console.log(typeof score);   // string
console.log(typeof(score));  // string (same thing)

let valueInNumber = Number(score)

console.log(valueInNumber);        // 33
console.log(typeof valueInNumber); // number


// ⚠️ invalid number
let score2 = "33abc"
let num2 = Number(score2)

console.log(num2); // NaN (Not a Number)
console.log(typeof num2); // number (important!)


// =======================
// 🔤 NUMBER → STRING
// =======================

let num = 100

let str = String(num)

console.log(str); // "100"
console.log(typeof str); // string


// =======================
// 🔘 BOOLEAN CONVERSION
// =======================

let isloggedIn = 1

let b = Boolean(isloggedIn)

console.log(b); // true


// 📌 Boolean rules (important)
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("Nowshad"));// true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false


// =======================
// 🔥 SPECIAL CASES
// =======================

// string + number
console.log("1" + 2);     // "12"
console.log(1 + "2");     // "12"

// tricky
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"


// =======================
// ⚡ QUICK CONVERSION (Unary +)
// =======================

let value = "50"

let newValue = +value

console.log(newValue);        // 50
console.log(typeof newValue); // number


// =======================
// 🚨 NULL & UNDEFINED
// =======================

console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

console.log(typeof null);       // object (JS bug 😱)
console.log(typeof undefined);  // undefined


// =======================
// 🧠 IMPORTANT SUMMARY
// =======================

// "33" → 33 ✅
// "33abc" → NaN ❌
// true → 1
// false → 0
// "" → false
// "text" → true
// null → 0
// undefined → NaN