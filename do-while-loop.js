/*
do while loop adalah perulangan yang mirip dengan while
perbedaannya hanya pada pengecekan kondisi saja , pengecekannya ini dilakukan setelah melakukan perulangan berbeda dengan while loop dimana pengecekan sebelum perulangan
oleh karena itu dalam do while loop minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true
jadi dimana semisalnya itu kondisi false maka akan tetap melakukan looping namun hanya menampilkan data yang dimasukkan saja 
*/
let num = 1;
do {
    console.log(`Index ${num}`);
    num++;
} while (num<=10);