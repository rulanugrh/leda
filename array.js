// array adalah tipe kumpulan data yang dimana javascript itu bersifat dinamis
/*
.push() -> memasukan data
.length() -> panjang array
arr[index] -> melihat / akses data ke index tertentu
arr[index] = value ->mengubah index tertentu
delete arr[index] ->hapus index
*/

var isNewArray = [];
isNewArray = [1,2,3,4,5,6];
isNewArray.push([9,0,7,10]); // array in array
console.log(isNewArray);
console.log(`Result is : ${isNewArray[6][0]}`); // result 9

var isArray = []; // Arrray KOSONG
isArray = ['Kiyo', 'Miyo', 'Arul'];
console.log(isArray);
console.log(isArray[0]); // Output : Kiyo
isArray[1] = 199; // Mengubah data array ketentu
console.log(isArray)

var isMeArray = [' kiyomi', 'kuro', 'kodok'];
console.log(isMeArray); // Array telah diisi
console.log(isMeArray[1]); // Output : kuro
// console.table(isMeArray)
delete isMeArray[2] // Output : ['kiyomi', 'kuro']
console.log(isMeArray);
isMeArray[2] = 100
console.log(`Result is : ${isArray + isMeArray}`)

const isRandom = ['string', 10, true];
console.log(isRandom); // Array random
console.log(isRandom[2]); // Output : true
isArray.push("heelo world")
console.log(isArray)