"use strict";

// =======================
// ⚖️ BASIC COMPARISON
// =======================

console.log(2 > 1);    // true
console.log(2 >= 2);   // true
console.log(2 < 1);    // false
console.log(2 == 2);   // true
console.log(2 != 3);   // true


// =======================
// 🔥 == vs ===
// =======================

console.log("2" == 2);   // true  (type conversion)
console.log("2" === 2);  // false (strict check)


// =======================
// 🔄 STRING vs NUMBER
// =======================

console.log("2" > 1);    // true
console.log("02" > 1);   // true


// =======================
// ⚠️ NULL CASES
// =======================

console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true


// =======================
// ⚠️ UNDEFINED CASES
// =======================

console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false


// =======================
// 🔘 BOOLEAN CASES
// =======================

console.log(true == 1);   // true
console.log(false == 0);  // true


// =======================
// 🔥 TRICKY CASES
// =======================

console.log("" == 0);      // true
console.log(" " == 0);     // true
console.log([] == 0);      // true
console.log([0] == 0);     // true


// =======================
// 🔍 STRICT CHECK EXTRA
// =======================

console.log(5 != 3);     // true
console.log(5 !== "5");  // true


// =======================
// 🧠 BONUS (STRING vs STRING)
// =======================

console.log("10" > "2"); // false (string compare, not number)


// =======================
// 🎯 FINAL NOTES
// =======================

// ==   ❌ avoid (type conversion)
// ===  ✅ use (safe)

// null vs undefined tricky
// string vs number → auto convert
// string vs string → lexicographical compare