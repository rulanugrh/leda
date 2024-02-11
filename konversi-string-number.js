// Ini penting banget ketika membangun sebuah aplikasi yang mainnya matematika
/*
contoh ini :
let isString = '1';
let isNum = 1;
console.log(`Result is ${isString + isNum}`);

Maka outputnya adalah : 
11

method untuk konversi string:
parseInt(string) -> ubah string to integer
parseFloat(string) -> ubah string to float
Number(string) -> ubah string menjadi angka fleksibe;
toString(number) -> ubah number to string
NaN -> Not a Number
isNan -> mengeck nan atau bukan, klw nan return true klw gak false
*/

const a = 1;
const b = 1;
const res = a.toString() + b.toString()
console.log(`Result is : ${res}`)
// Output : Result is : 11

const numA = 1;
const numB = '1';
console.log(`Result is : ${numA + parseInt(numB)}`);
// Output : Result is : 2

const isMyFloat = '1.5';
const isPure = 1.5;
console.log(`Result is : ${parseFloat(isMyFloat) + isPure}`);
// Output = Result is : 3

const isString = '1.1';
const isNum = 1;
console.log(`Result is : ${Number(isString) + isNum}`);
// Output : 2.1

const isNanString = 'is my teks';
const isNanFloat = '1.1mimi';
const isNanInt = '1satuaku';
console.log(`Result is : ${Number(isNanString)}`);
console.log(`Result is : ${parseFloat(isNanFloat)}`);
console.log(`Result is : ${parseInt(isNanInt)}`);
// Output : Nan, 1.1, 1

const ismy = 'string';
console.log(`Result is : ${isNaN(Number(ismy))}`);