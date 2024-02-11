/*
In operator ialah membuktikan dimana data terdapat didalam objek
*/
const biodata = {
  nama: "arul",
  kelas: 11,
  umur: 16,
  lahir: "jakarta"
}

if ('umur' in biodata){
  console.log(`My umur is ${biodata.umur}`)
}else{
  console.log('0')
};

const kampus = {
  MahasiswaAbadi: "Dimas",
  MahasiswaBuaya: "KuRo",
  MahasiswaRajin: "Kiyo",
  Dosen: "Kotok"
};

if ('MahasiswaAbadi' in kampus){
  console.log(`Mahasiswa Abadi Adalah ${kampus.MahasiswaAbadi}`);
}else{
  console.log(`Semua Rajin Gak yang Abadi`);
};

const arr = ['Kiyo', 'Taka', 'Ayanokouji'];
if (0 in arr){
  console.log(`Result is ${arr[0]}`);
}else{
  console.log(`Raono`);
};
// Output Result is Kiyo

const arr = ['Kiyo', 'Taka', 'Ayanokouji'];
if (5 in arr){
  console.log(`Result is ${arr[0]}`);
}else{
  console.log(`Raono`);
};
// Raono