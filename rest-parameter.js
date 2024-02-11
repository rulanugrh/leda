/*
rest parameter dimana kita bisa mengirimkan data sebanayak banyaknya yang dimana konversi menjadi array, `...`rest parameteer
spread syntax merubah data array ke rest parameter
*/
function res(name, ...data){
    let total = 0
    for(const item of data){
        total += item;
    };
    console.log(`Total ${name} is ${total}`)
};
res('Kiyo',2,3,4,5,6,7,8,9,0,);

function sum(...num){
    let data = 0;
    for(const items of num){
        data += items;
    }
    console.log(`Result is : ${data}`);
};
sum(...[2,3,4,5,6,7,8,9,0]);