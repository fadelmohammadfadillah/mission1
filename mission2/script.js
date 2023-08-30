let barang = [
    {
        "id": "1",
        "nama_produk": "Baso",
        "harga": "30000",
        "src": "img/img-error.png"
    },
    {
        "id": "2",
        "nama_produk": "Siomay",
        "harga": "15000",
        "src": "img/img-error.png"
    },
    {
        "id": "3",
        "nama_produk": "Tahu",
        "harga": "20000",
        "src": "img/img-error.png"
    },
    {
        "id": "4",
        "nama_produk": "Baso Ikan",
        "harga": "40000",
        "src": "img/img-error.png"
    }
]

function LoadContent(srcImg, namaBarang, hargaBarang, idBarang){
    let contentBarang = document.getElementById("content-barang");

    //buat card-barang
    let cardBarang= document.createElement('div');
    cardBarang.classList.add("col-4");

    //buat tag img barang
    let imgBarang = document.createElement('img');
    // imgBarang.src(srcImg);
    imgBarang.setAttribute('src', srcImg);
    imgBarang.classList.add('card-img-top');
    cardBarang.appendChild(imgBarang);
    
    //buat card body
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBarang.appendChild(cardBody);
    
    //isi card body
    let cardTitle = document.createElement('h5');
    cardTitle.textContent = namaBarang
    cardTitle.classList.add('card-title');
    cardBarang.appendChild(cardTitle);

    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = `Rp. ${hargaBarang}`;
    cardBarang.appendChild(cardText);

    let buttonCard = document.createElement('div');
    buttonCard.classList.add('text-center');

    //isi button card
    //button minus
    let buttonMinus = document.createElement('button');
    buttonMinus.classList.add('btn', 'btn-primary');
    buttonMinus.id = 'kurangi-qty';
    buttonMinus.textContent = '-';
    buttonCard.setAttribute('onclick', `kurangiBarang(${idBarang})`);
    buttonCard.appendChild(buttonMinus);

    //kolom qty
    let qtyColumn = document.createElement('input');
    qtyColumn.setAttribute('type', 'number');
    qtyColumn.setAttribute('name', 'qty');
    qtyColumn.id = 'qty-' + idBarang;
    qtyColumn.setAttribute('value', '1');
    qtyColumn.setAttribute('style', 'width: 20%;');
    qtyColumn.classList.add('text-center');
    buttonCard.appendChild(qtyColumn);

    //button plus
    let buttonPlus = document.createElement('button');
    buttonPlus.classList.add('btn', 'btn-primary');
    buttonPlus.id = 'tambah-qty';
    buttonPlus.textContent = '+';
    buttonPlus.setAttribute('onclick', `tambahBarang(${idBarang})`)
    buttonCard.appendChild(buttonPlus);

    //break rules
    let br = document.createElement('br');
    buttonCard.appendChild(br);

    //button tambah barang
    let buttonTambahBarang = document.createElement('button');
    buttonTambahBarang.classList.add('btn', 'btn-success');
    buttonTambahBarang.setAttribute('style', 'margin-top: 1rem;');
    buttonTambahBarang.textContent = 'Tambah Barang';
    buttonTambahBarang.setAttribute('onclick', `totalBiaya(namaBarang, hargaBarang, idBarang, ${qtyColumn.value}`);
    buttonCard.appendChild(buttonTambahBarang);

    cardBarang.appendChild(buttonCard);
    contentBarang.appendChild(cardBarang);
}

function Cart(namaItem, hargaItem, idItem, qtyItem){
    // Membuat container untuk cart
    let cartContainer = document.getElementById('content-keranjang');
    // Membuat judul "My Cart"
    var cartTitle = document.createElement("h3");
    cartTitle.textContent = "My Cart";
    cartContainer.appendChild(cartTitle);

    // Loop untuk membuat elemen-elemen row
    var row = document.createElement("div");
    row.classList.add("row");
    row.id = 'barang-' + idItem;

    // Nama Barang
    var colNamaBarang = document.createElement("div");
    colNamaBarang.classList.add("col-5");
    var namaBarang = document.createElement("h5");
    namaBarang.classList.add("fs-6");
    namaBarang.textContent = namaItem;
    colNamaBarang.appendChild(namaBarang);
    row.appendChild(colNamaBarang);

    // Harga per barang
    var colHargaPerBarang = document.createElement("div");
    colHargaPerBarang.classList.add("col-5");
    var hargaPerBarang = document.createElement("p");
    hargaPerBarang.classList.add("fs-6");
    hargaPerBarang.textContent = "Rp. " + hargaItem + " x " + qtyItem;
    colHargaPerBarang.appendChild(hargaPerBarang);
    row.appendChild(colHargaPerBarang);

    // Total Harga
    var colTotalHarga = document.createElement("div");
    colTotalHarga.classList.add("col-2");
    var totalHarga = document.createElement("h5");
    totalHarga.classList.add("fs-6");
    totalHarga.textContent = "Rp. " + hargaItem * qtyItem;
    colTotalHarga.appendChild(totalHarga);
    row.appendChild(colTotalHarga);

    // Menambahkan elemen row ke dalam cart container
    cartContainer.appendChild(row);

    // Membuat elemen hr
    var hr = document.createElement("hr");
    cartContainer.appendChild(hr);

    
    return hargaItem*qtyItem;
}

function totalBiaya(namaItem, hargaItem, idItem, qtyItem){
    let hargaBarang = Cart(namaItem, hargaItem, idItem, qtyItem);
    let hargaTotal = 0
    hargaTotal += hargaBarang;
    let pajak = 11/100;
    let cartContainer = document.getElementById('harga-total');
    // Total Pembelian
    var totalPembelianRow = document.createElement("div");
    totalPembelianRow.classList.add("row");
    var colTotalPembelian = document.createElement("div");
    colTotalPembelian.classList.add("col-7");
    var totalPembelianLabel = document.createElement("h5");
    totalPembelianLabel.classList.add("fs-6");
    totalPembelianLabel.textContent = "Total Pembelian";
    colTotalPembelian.appendChild(totalPembelianLabel);
    totalPembelianRow.appendChild(colTotalPembelian);

    var colTotalPembelianAmount = document.createElement("div");
    colTotalPembelianAmount.classList.add("col-5", "text-end");
    var totalPembelianAmount = document.createElement("h5");
    totalPembelianAmount.classList.add("fs-6");
    totalPembelianAmount.textContent = `Rp. ${hargaTotal}`;
    colTotalPembelianAmount.appendChild(totalPembelianAmount);
    totalPembelianRow.appendChild(colTotalPembelianAmount);

    cartContainer.appendChild(totalPembelianRow);

    // Pajak
    var pajakRow = document.createElement("div");
    pajakRow.classList.add("row");
    var colPajak = document.createElement("div");
    colPajak.classList.add("col-7");
    var pajakLabel = document.createElement("h5");
    pajakLabel.classList.add("fs-6");
    pajakLabel.textContent = "Pajak";
    colPajak.appendChild(pajakLabel);
    pajakRow.appendChild(colPajak);

    var colPajakAmount = document.createElement("div");
    colPajakAmount.classList.add("col-5", "text-end");
    var pajakAmount = document.createElement("h5");
    pajakAmount.classList.add("fs-6");
    pajakAmount.textContent = "11%";
    colPajakAmount.appendChild(pajakAmount);
    pajakRow.appendChild(colPajakAmount);

    cartContainer.appendChild(pajakRow);

    // Total Bayar
    var totalBayarRow = document.createElement("div");
    totalBayarRow.classList.add("row");
    var colTotalBayar = document.createElement("div");
    colTotalBayar.classList.add("col-7");
    var totalBayarLabel = document.createElement("h5");
    totalBayarLabel.classList.add("fs-6");
    totalBayarLabel.textContent = "Total Bayar";
    colTotalBayar.appendChild(totalBayarLabel);
    totalBayarRow.appendChild(colTotalBayar);

    var colTotalBayarAmount = document.createElement("div");
    colTotalBayarAmount.classList.add("col-5", "text-end");
    var totalBayarAmount = document.createElement("h5");
    totalBayarAmount.classList.add("fs-6");
    totalBayarAmount.textContent = `Rp. ${hargaTotal + hargaTotal * pajak}`;
    colTotalBayarAmount.appendChild(totalBayarAmount);
    totalBayarRow.appendChild(colTotalBayarAmount);

    cartContainer.appendChild(totalBayarRow);
}
function kurangiBarang(idBarang){
    let jumlah = document.getElementById('qty-' + idBarang);
    jumlahBarang = jumlah.value;
    jumlah.value = jumlahBarang- 1;
}
function tambahBarang(idBarang){
    let jumlah = document.getElementById('qty-' + idBarang);
    jumlahBarang = jumlah.value;
    jumlah.value = jumlahBarang+ 1; 
}

totalBiaya("Baso", 30000, "1", "2");
barang.forEach(element => {
    LoadContent(element.src, element.nama_produk, element.harga, element.id);
});