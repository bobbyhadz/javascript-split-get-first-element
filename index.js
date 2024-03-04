// EXAMPLE 1 - Split a String and get First or Last Array Element in JS

// ✅ split a string and get First element
const str = 'bobby,hadz,com';

const firstElement = str.split(',').shift();
console.log(firstElement); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 2 - Split a String and get the First or Last Array Element using `Array.at()`

// // ✅ split a string and get First element
// const str = 'bobby,hadz,com';

// const firstElement = str.split(',').at(0);
// console.log(firstElement); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 3 - Split a String and get the First or Last Array Element using indexing

// // ✅ split a string and get the First array element
// const str = 'bobby,hadz,com';

// const firstElement = str.split(',')[0];
// console.log(firstElement); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 4 - Split a String and get the First or Last Array Element using `slice()`

// // ✅ split a string and get the First array element
// const str = 'bobby,hadz,com';

// const firstElement = str.split(',').slice(0, 1)[0];
// console.log(firstElement); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 5 - Split a String and get the Last Array Element using regex

// const str = 'bobby hadz_com';

// // 👇️ [ 'bobby', 'hadz', 'com' ]
// console.log(str.split(/[\s_]+/));

// const lastElement = str.split(/[\s_]+/).pop();
// console.log(lastElement); // 👉️ com
