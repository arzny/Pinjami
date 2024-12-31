document.getElementById("transaksiForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;
    const kategori = document.getElementById("kategori").value;

    if (!nama || !jumlah || !kategori) {
        alert("Semua kolom harus diisi!");
        return;
    }

    let transaksi = JSON.parse(localStorage.getItem("transaksi")) || [];

    transaksi.push({
        nama: nama,
        jumlah: jumlah,
        kategori: kategori,
    });

    localStorage.setItem("transaksi", JSON.stringify(transaksi));

    alert("Transaksi berhasil disimpan!");

    document.getElementById("transaksiForm").reset();

    window.location.href = "daftar_transaksi.html";
});