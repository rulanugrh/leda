/*
Undefined adalah sebuah data yang belum didefinisikan, baik variabel, array, dict/object
*/

let nama = 'KIYO';
if (nama == undefined){
  console.log('UNDEFINED')
}else{
  console.log('DEFINED')
}

const myName = ['kiyo', 'kotok'];
if (myName[2] === undefined){
  console.log('Not Found');
}else{
  console.log(`Hello ${myName[2]}`)
}

var isMe = {
  nama: 'kiyo'
};
if (isMe.nama === undefined){
  console.log('Object Not Found');
}else{
  console.log(`Hai ${isMe.nama}`);
}