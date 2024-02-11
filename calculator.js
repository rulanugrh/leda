// Simple Project
console.log('Calculator By Python');
console.log('1. Pertambahan');
console.log('2. Perkalian');
console.log('3. Pembagian');
console.log('4. Pengurangan');
console.log('='*40);

let oP = 'pilih operasi (1/2/3/4) : ';
let numA = 'masukan angka 1 : ';
let numB = 'masukan angka 2: ';
console.log('='*40);

if(oP == '1') {
    console.log(`Result : ${numA + numB}`)
} else if (oP == '2') {
    console.log(`Result : ${numA * numB}`)
} else if (oP == '3') {
    console.log(`Result : ${numA - numB}`)
} else {
    console.log(`Result : ${numA / numB}`)
}