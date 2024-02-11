/*
Return adalah sebuah method yang dimana untuk mengembalikan value, selain itu contohnya adlah prompt dan confirm 
note return akan berhenti jika sudah menemukan data yang seharusnya
*/
function retValue(num){
    return num
};

console.log(retValue(10)) // ambil value

function isGanjil(num){
    for(;num <= 10; num++){
        if(num%2 != 0){
            return res;
        };
    };
};

console.log(`Result is : ${isGanjil(1)}`);
// Outputnya akan 1 karena sudah ketemu hasilnya

function nilai(res){
    if(res > 90){
        return "A";
    }else if(res > 80){
        return "B";
    }else if(res > 70){
        return "C";
    }else{
        return "GOBLOG";
    };
};
console.log(`Result : ${nilai(91)}`);
console.log(`Result : ${nilai(81)}`);
console.log(`Result : ${nilai(71)}`);
console.log(`Result : ${nilai(61)}`);