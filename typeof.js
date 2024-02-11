var hexa = 0xFF;
var octal = 0o100;
var binary = 0b10001;
var str = 'kiyo';
var num = 10;
var unde = undefined;
var nulle = null;

console.log(`Result hexa is : ${typeof(hexa)}`);
console.log(`Result octal is : ${typeof(octal)}`);
console.log(`Result binary is : ${typeof(binary)}`);
console.log(`Result str is : ${typeof(str)}`);
console.log(`Result num is : ${typeof(num)}`);
console.log(`Result unde is : ${typeof(unde)}`);
console.log(`Result nulle is : ${typeof(nulle)}`);

let data;
if (typeof(data) === "object"){
  console.log('object')
}else if (typeof(data) === "number"){
  console.log('number')
}else{
  console.log(0)
}