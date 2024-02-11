/*
for in adalah perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
walaupun for in digunakan untuk array namun jarang orang menggunakanya, untuk array ada namanya for of
*/

const mybiodata = {
    name: "kiyotaka",
    classes: "tkj 2"
}; // ini untuk object

for (const index in mybiodata) {
    console.log(index);
    console.log(mybiodata[index]); // mengakses value
};

const arr = [1,2,3,4,5];
for(indexs of arr){
    if(indexs%2 == 0){
        console.log(indexs);
    };
};