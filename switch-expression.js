/*
Switch ini sama kaya if hanya saja switch cuma bisa dengan `==`
*/
var nilai = 'B';
switch (nilai) {
  case 'A':
    console.log('Selamat Anda Lulus');
    break;
  case 'B':
    console.log('Anda lumayan pandai');
    break;
  case 'C':
    console.log('Selamat Anda Tidak Lulus');
    break;
  default:
    console.log('Anda TERLALU BODOH');
    break;
}