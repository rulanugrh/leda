/*
Alert ->peringatan popup di brower
prompt -> input string by user
confirm -> input berupa bool
*/

alert('Hello World'); // Popup Alert

const nama = prompt('what is your name? ');
alert(`Hay ${nama}`) // input user by prompt

const mlebu = confirm('anda yakin mlebu?'); // merupakan fitur popup brower dimana menambilkan ok atau cancel
if (mlebu){
  const namaKu = prompt('namamu ?');
  alert(`Result : ${namaKu}`);
}else{
  alert('Kick')
}