/*
break adalah dimana statement akan berhenti ketika sudah selesai
continue dimana ketika sudah selesai memenuhi maka akan lanjut ke selanjutnya
*/
let nums = 1;
while(true){
    console.log(`Index : ${nums}`);
    nums++;
    if (nums > 10){
        break
    };
};

for(i = 1; i <= 10; i++){
    if(i %2 == 0){
        continue;
    }
    console.log(`is ${i}`)
}
/*
Index : 1
Index : 2
Index : 3
Index : 4
Index : 5
Index : 6
Index : 7
Index : 8
Index : 9
Index : 10

is 1
is 3
is 5
is 7
is 9
*/