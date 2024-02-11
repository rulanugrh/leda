/*
Banyak menggagap kalau null itu sama dengan undefined , tapi sebenarnya null itu ialah dimana data yang sudah ada tetapi valuenya null
*/

var myNull = null;
if (myNull === null){
  console.log('NULL')
}else{
  console.log(`Hai ${myNull}`)
}