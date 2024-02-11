// or baca dari kiri ke kanan dan membaca dari nilai truty
// and baca dari kiri ke kanan dan membaca dari falsy dulu

console.log(`Result is : ${'' || 1}`); // 1
console.log(`Result is : ${'1' || 1}`); // 1
console.log(`Result is : ${'Hai' || 0}`);// Hai
console.log(`Result is : ${'kotokman' || 0}`); // kotokman
console.log(`Result is : ${'' || 0}`); // 0
console.log(`Result is : ${'Null' || null}`); // Null
console.log(`Result is : ${'Undefined' || undefined}`); // Undefined

const biodata = {
  myname: "Sahrul",
  mydiscord: "Kiyo"
};
const res = biodata.myname || biodata.mydiscord
console.log(`Result is ${res}`);
/*
const biodata = {
  myname: null,
  mydiscord: "Kiyo"
};
const res = biodata.myname || biodata.mydiscord
console.log(`Result is ${res}`);
*/
console.log(`Result is : ${'' && 1}`); // ''
console.log(`Result is : ${[] && 1}`); // 1
console.log(`Result is : ${'Hai' && 0}`); // 0
console.log(`Result is : ${'kotokman' && 0}`); // 0
console.log(`Result is : ${'' && 0}`); // 0
console.log(`Result is : ${'NULL' && null}`); // null
console.log(`Result is : ${'UNDEFINED' && undefined}`); // undefined

const biodata = {
  myname: "Sahrul",
  mydiscord: null
};
const res = biodata.myname && biodata.mydiscord
console.log(`Result is ${res}`);
/*
const biodata = {
  myname: "Sahrul",
  mydiscord: "Kiyo"
};
const res = biodata.myname && biodata.mydiscord
console.log(`Result is ${res}`);
*/