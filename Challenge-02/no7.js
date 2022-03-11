const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

function hitungTotalPenjualan(dataPenjualan){
    var totalPenjualan = [];
    for (var i = 0; i < dataPenjualan.length; i++) {
        var total = {
          namaProduct : dataPenjualan[i].namaProduct,
          hargaSatuan : dataPenjualan[i].hargaSatuan,
          kategori : dataPenjualan[i].kategori,
          totalTerjual : dataPenjualan[i].totalTerjual,
          totalPenjualan : dataPenjualan[i].hargaSatuan * dataPenjualan[i].totalTerjual,
        };
        totalPenjualan.push(total);
    }
    return totalPenjualan;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));