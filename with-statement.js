/*
with statement ialah fitur yang digunakan untuk scope data
namun tidak direkomendasikan, karena with statement kadang membuat code menjadi ambigu
*/
const isBiodata = {
    nama: "kiyotaka",
    kelas: "xi tkj 2",
    lulusan: "tkj"
};

with(isBiodata){
    console.log(nama);
    console.log(kelas);
    console.log(lulusan);
};
