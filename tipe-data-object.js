/*
Associative Array -> indexnya itu bisa berupa string
Tipe data object -> menggunakan {} yang disebut attribute atau propetis ini mirip dengan dictionary di piton
*/

var kodok = `{
  "nama": "Sahrul",
  "kelas": "Xi tkj 2",
  "kotok": "Kiyomi"
}`;

var result = JSON.parse(kodok, (key, value) => {
  return typeof value === "object" ? "this is object": value
  
})

console.log(result)

var notObject = JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  outUnden = key ? key: "not having key"
  console.log(outUnden)
})

// console.log(`My Name is : ${kodok.namaKu}\nFrom : ${kodok.kelasKu}`);

// kodok["namaKu"] = "Kiyotaka"

// console.table(kodok);

// delete kodok.kotokKu;

// console.log(kodok);