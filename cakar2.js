let barang = [
  { nama: "Kemeja Pria", stock: 10, harga: 120000 },
  { nama: "Celana Jeans Pria", stock: 5, harga: 200000 },
  { nama: "Sepatu Air Jordan Pria", stock: 3, harga: 2000000 },
  { nama: "Sepatu Yeezy Pria", stock: 5, harga: 4000000 },
];

class AddtoCart {
  constructor(nama, qty, harga) {
    this.nama = nama;
    this.qty = qty;
    this.harga = harga;
  }
}

let listbarang = "";
barang.forEach((element, index) => {
  listbarang +=
    index +
    1 +
    ". " +
    element.nama +
    ", Stok: " +
    element.stock +
    ", Harga @ Rp. " +
    element.harga.toLocaleString("id-ID") +
    "\n";
});
console.log(listbarang);
