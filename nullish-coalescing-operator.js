/*
Nullist adalah representasi dari data kosong, valuenya adalah null dan undefinied, untuk nulisnya yaitu dengan (??)
*/

var data;
var params = data
if(params === undefined || params === null){
  params = 'Nilai Default'
  console.log(params);
}else{
  console.log('Found');
};

// Nulling Coalesing Operator
let num;
let result = num ?? 'Nilai anda tidak ada';
console.log(result);