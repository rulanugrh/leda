/*
for of digunakan iterasi terhadap isi valuenya, for of dapat dilakukan di dalam array atau string
*/

var num = 0;
numarr = [1,2,3,4,5,6,7,8,9,10,11];

for(res of numarr){
    num += res

    if (num >= 50) {
        break
    }
};

console.log(`Result : ${num}`)