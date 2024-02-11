/*
anonymous function adalah function yang tidak memiliki nama , dimana variabel bisa dimasukan hasilnya
*/

let say = function(nama){
    console.log(`Hay ${nama}`);
};

say('Rul')

/*
Alur kerja script dibawah ini dimana function helloWorld 
*/

function helloWorld(Namaku) {
    Namaku('Sahrul')
}

helloWorld(function (nama){
    console.log(`Hello ${nama}`)
});

