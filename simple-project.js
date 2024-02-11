/*
Ambil data array
*/
const nama = ['Kiyo', 'Amad', 'Ucup', 'Julia'];
for(const items in nama){
    res = nama[items]
    console.log(`Namaku adalah ${res}`);
};
console.log('==============================================================');

const isNum = [1,2,34,6,76,8,9,34,523,2334,5,32,2,13,243,24123,4,134,2,3,3,1]
for(const result of isNum){
    if(result%2 == 0){
        console.log(`Angka ${result} adalah Genap`);
    }else{
        console.log(`Angka ${result} adalah Ganjil`);
    };
};