let menuSelected = 0;

function transferPulsa() {
    document.getElementById("output").innerHTML = "Masukkan Nomor Tujuan:";
    showAction();
    menuSelected = 1;
}

function cekSaldo() {
    document.getElementById("output").innerHTML = "Saldo Anda: 90000 Rupiah";
}

function beliPaket() {
    document.getElementById("output").innerHTML = "Paket Tersedia: 1GB = Rp10000, 5GB = Rp40000, 10GB = Rp70000. Masukkan paket:";
    showAction();
    menuSelected = 3;
}

function keluar() {
    document.getElementById("output").innerHTML = "Terima kasih telah menggunakan layanan kami!";
}

function showAction() {
    document.getElementById("action").classList.remove("hidden");
}

function submitAction() {
    const input = document.getElementById("userInput").value;
    const actionOutput = document.getElementById("actionOutput");

    if (menuSelected === 1) {
        actionOutput.innerHTML = `Transfer berhasil ke nomor: ${input}`;
    } else if (menuSelected === 3) {
        const paket = input;
        if (paket == 1 || paket == 5 || paket == 10) {
            actionOutput.innerHTML = `Anda telah membeli paket ${paket}GB.`;
        } else {
            actionOutput.innerHTML = "Paket tidak ditemukan!";
        }
    }
    
    document.getElementById("action").classList.add("hidden");
}
