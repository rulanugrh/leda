// for adalah salah satu bentuk perulanagan dimana jika kondisi terpenuhi maka akan berhenti jika gak akan selalu berulang
// for(init statement; kondisi; posst statement){
//    block kode
//}
/*
init statement akan dieksekusi hanya dilakukan di awal perulangan 
kondisi dimana akan melakukan pengecekan dalam setiap perulangan
post statement ialah akan diekssekusi di akhir perulangan
init statement , kondisi dan post statement tidak wajib diisi jika kondisi tidak diisi berarti kondisi selalu bernilai true
*/

for (; ;){ // maka akan infinite loop
    console.log('Hello World') 
    break;
}

for (var counter = 1; counter <= 10;){
    console.log(`Perulangan ke ${counter}`);
    counter++
};

// FizzBuzz
for (var num = 1; num <= 20; num++){
    if (num%5 == 0 && num%3 == 0){
        console.log('FizzBuzz');
    }else if(num%5 == 0){
        console.log('Fizz');
    }else if(num%3 == 0){
        console.log('Buzz');
    }else{
        console.log(`${num}`)
    };
};
