const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

function getInfoPenjualan(dataPenjualan){
    var infoPenjualan = [];
    for (var i = 0; i < dataPenjualan.length; i++) {
        var info = {
            idProduct: dataPenjualan[i].idProduct,
            namaProduk: dataPenjualan[i].namaProduk,
            penulis: dataPenjualan[i].penulis,
            hargaBeli: dataPenjualan[i].hargaBeli,
            hargaJual: dataPenjualan[i].hargaJual,
            totalTerjual: dataPenjualan[i].totalTerjual,
            sisaStok: dataPenjualan[i].sisaStok,
            TotalKeuntungan: (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual,
            persentaseKeuntungan: ((dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual) / dataPenjualan[i].hargaJual * 100,
            totalModal: dataPenjualan[i].hargaBeli * dataPenjualan[i].totalTerjual,
            
        };
        infoPenjualan.push(info);
    }
    
    return infoPenjualan;
}

console.log(getInfoPenjualan(dataPenjualanNovel));  