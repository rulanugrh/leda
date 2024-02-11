/*
function tidak hanya bisa digunakan sebagai kode progam yang dieksekusi, tapi bisa juga sebagai value. Artinya function bisa disimpan didalam variabel, bisa juga dikirim ke function lain
*/

function helloName(nama){
    console.log(`Hay ${nama}`);
};

var res = helloName('Arul');
helloName('Kiyo');

// Function di parameter
let say = helloName;
say('Budi')
function giveMeName(cb){
    cb('Kyo');
};
giveMeName(helloName);
// giveMeName(say);
