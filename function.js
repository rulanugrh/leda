/*
function adalah blok kode progam dimana ini berjalan ketika kita panggil jadi biasanya ketika kita ingin membuat function disinilah script kita disimpan
function parameter adalah function dimana function ini membutuhkan params yang dimana ketika running harus memanggil parameternya
*/
function isMyDream(){
    for(let a = 1; a <= 20; a++){
        if(a%2==0){
            console.log(`Angka Genap : ${a}`);
        }else{
            console.log(`Angka Ganjil : ${a}`);
        };
    };
};

isMyDream(); // call function

function isGenap(num){
    for(;num <= 10; num++){  
        if(num%2 == 0){
            console.log(`Result is : ${num}`);
        };
    }
};

isGenap(1)
