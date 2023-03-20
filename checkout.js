let belanja = [
  { produk: "Kemeja Pria", stock: 10, harga: 120000 },
  { produk: "Celana Jeans Pria", stock: 5, harga: 200000 },
  { produk: "kaos Pria", stock: 5, harga: 55000 },
  { produk: "Celana pendek Pria", stock: 5, harga: 70000 },
];
let hapusItem = 2;
belanja.splice(hapusItem - 1, 1);
console.log(belanja);
let arr = [];
for (let i = 0; i < belanja.length; i++) {
  let harga = belanja[i].harga;
  arr.push(harga);
}

let tambah = 0;
for (let i = 0; i < arr.length; i++) {
  tambah += arr[i];
}

console.log(tambah);
