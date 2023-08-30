let barang = [
    {
        "id": "1",
        "nama_produk": "Baso",
        "harga": "30000",
        "src": "img/bakso.jpg"
    },
    {
        "id": "2",
        "nama_produk": "Siomay",
        "harga": "15000",
        "src": "img/siomay.jpg"
    },
    {
        "id": "3",
        "nama_produk": "Tahu",
        "harga": "20000",
        "src": "img/tahu.jpg"
    },
    {
        "id": "4",
        "nama_produk": "Seblak",
        "harga": "40000",
        "src": "img/seblak.jpg"
    }
]

data_terbeli = [];

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
    buttonMinus.setAttribute('onclick', `kurangiBarang(${idBarang})`);
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
    buttonPlus.setAttribute('onclick', `tambahBarang(${idBarang})`);
    buttonCard.appendChild(buttonPlus);

    //break rules
    let br = document.createElement('br');
    buttonCard.appendChild(br);

    //button tambah barang
    let buttonTambahBarang = document.createElement('button');
    buttonTambahBarang.classList.add('btn', 'btn-success');
    buttonTambahBarang.setAttribute('style', 'margin-top: 1rem;');
    buttonTambahBarang.textContent = 'Tambah Barang';
    buttonTambahBarang.setAttribute('onclick', `Cart('${namaBarang}', ${hargaBarang}, ${idBarang})`);
    buttonCard.appendChild(buttonTambahBarang);

    cardBarang.appendChild(buttonCard);
    contentBarang.appendChild(cardBarang);
}

function Cart(namaItem, hargaItem, idItem){
    let qtyItem = document.getElementById('qty-' + idItem).value;
    // Membuat container untuk cart
    let cartContainer = document.getElementById('list-barang');

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

    let total = parseInt(hargaItem) * parseInt(qtyItem);
    data_terbeli.push(total)
    totalBiaya();
}

function totalBiaya(){
    let hargaTotal = 0
    for (i=0; i<data_terbeli.length;i++){
        hargaTotal += data_terbeli[i];
    }
    let hargaFinal = hargaTotal + hargaTotal * 11/100;
    document.getElementById('total-pembelian').textContent = hargaTotal;
    document.getElementById('total-bayar').textContent = hargaFinal;
}
function kurangiBarang(idBarang){
    let jumlah = document.getElementById('qty-' + idBarang);
    console.log(parseInt(jumlah.value));
    let jumlahBarang = parseInt(jumlah.value);
    jumlah.value = jumlahBarang - 1;
}
function tambahBarang(idBarang){
    let jumlah = document.getElementById('qty-' + idBarang);
    console.log(parseInt(jumlah.value))
    let jumlahBarang = parseInt(jumlah.value);
    jumlah.value = jumlahBarang+ 1; 
}
barang.forEach(element => {
    LoadContent(element.src, element.nama_produk, element.harga, element.id);
});