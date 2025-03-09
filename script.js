/* Halaman 1 */
document.getElementById("pemeriksaan").addEventListener("click", function() {
    window.location.href = "halaman2.html";
});

document.getElementById("pertanyaan").addEventListener("click", function() {
    window.location.href = "halaman12.html";
});

/* Halaman 2, 3, 4 */
function goToPage(pageNumber) {
    window.location.href = `halaman${pageNumber}.html`;
}

/* Halaman 5 - Borang Tempahan & WhatsApp */
function hantarKeWhatsApp() {
    let namaPemilik = document.getElementById("namaPemilik").value;
    let icPemilik = document.getElementById("icPemilik").value;
    let alamatPemilik = document.getElementById("alamatPemilik").value;
    let telefonPemilik = document.getElementById("telefonPemilik").value;
    let emelPemilik = document.getElementById("emelPemilik").value;
    let namaKucing = document.getElementById("namaKucing").value;
    let umurKucing = document.getElementById("umurKucing").value;
    let bakaKucing = document.getElementById("bakaKucing").value;
    let beratKucing = document.getElementById("beratKucing").value;
    let tarikhTemujanji = document.getElementById("tarikhTemujanji").value;
    let tujuanRawatan = document.getElementById("tujuanRawatan").value;
    let statusRawatan = document.getElementById("statusRawatan").value;

    let mesej = `Borang Tempahan & Persetujuan Rawatan\n\nMAKLUMAT PEMILIK\nNama: ${namaPemilik}\nIC: ${icPemilik}\nAlamat: ${alamatPemilik}\nTelefon: ${telefonPemilik}\nEmel: ${emelPemilik}\n\nMAKLUMAT KUCING\nNama: ${namaKucing}\nUmur: ${umurKucing}\nBaka: ${bakaKucing}\nBerat: ${beratKucing}\n\nTEMUJANJI & RAWATAN\nTarikh: ${tarikhTemujanji}\nTujuan: ${tujuanRawatan}\nStatus Rawatan: ${statusRawatan}\n\nSaya bersetuju untuk meneruskan rawatan.`;

    let whatsappURL = `https://wa.me/60182624047?text=${encodeURIComponent(mesej)}`;
    window.open(whatsappURL, "_blank");

    setTimeout(() => {
        window.location.href = "halaman6.html";
    }, 2000);
}

/* Halaman 6 - Lokasi */
function bukaPeta() {
    window.open("https://maps.app.goo.gl/9xPKvnsMusH4sj4z6", "_blank");
}
function navigateTo(page) {
    window.location.href = page;
}

/* Halaman 7 - Kos Rawatan */
document.addEventListener("DOMContentLoaded", function () {
    const toggleCostBtn = document.getElementById("toggleCostBtn");
    const costInfo = document.getElementById("cost-info");
    toggleCostBtn.addEventListener("click", function () {
        costInfo.classList.toggle("hidden");
    });
});

/* Halaman 8 - Butiran */
function toggleDetails(id) {
    var element = document.getElementById(id);
    element.style.display = (element.style.display === "none" || element.style.display === "") ? "block" : "none";
}

/* Halaman 9 - Toggle Info */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById(this.getAttribute("data-target")).classList.toggle("hidden");
        });
    });
});

/* Halaman 11 - Penyakit */
function toggleInfo() {
    let infoDiv = document.getElementById("info");
    infoDiv.classList.toggle("hidden");
}

/* Halaman 12 - Penerangan */
function tunjukPenerangan() {
    let penerangan = document.getElementById("penerangan");
    penerangan.classList.toggle("hidden");
}

/* Halaman 13 - Pilihan & Pengesahan */
document.addEventListener("DOMContentLoaded", function() {
    const pilihanButtons = document.querySelectorAll('input[name="pilihan"]');
    const confirmBtn = document.getElementById("confirmBtn");

    pilihanButtons.forEach(button => {
        button.addEventListener("change", function() {
            pilihanButtons.forEach(btn => { if (btn !== this) btn.checked = false; });
        });
    });

    confirmBtn.addEventListener("click", function() {
        if (document.querySelector('input[name="pilihan"]:checked')) {
            window.location.href = "halaman5.html";
        } else {
            alert("Sila pilih satu pilihan sebelum meneruskan.");
        }
    });
});

/* Halaman 14 - Auto Redirect */
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => window.location.href = "halaman1.html", 5000);
    document.getElementById("homeBtn").addEventListener("click", function() {
        window.location.href = "halaman1.html";
    });
});
