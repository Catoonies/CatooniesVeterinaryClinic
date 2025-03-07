// script.js
function showForm(service) {
    document.getElementById('booking-form').style.display = 'block';
}

function sendToWhatsApp() {
    let ownerName = document.getElementById('ownerName').value;
    let ownerIC = document.getElementById('ownerIC').value;
    let ownerAddress = document.getElementById('ownerAddress').value;
    let ownerPhone = document.getElementById('ownerPhone').value;
    let ownerEmail = document.getElementById('ownerEmail').value;
    
    let catName = document.getElementById('catName').value;
    let catAge = document.getElementById('catAge').value;
    let catBreed = document.getElementById('catBreed').value;
    let appointmentDate = document.getElementById('appointmentDate').value;
    let appointmentReason = document.getElementById('appointmentReason').value;
    
    let treatmentStatus = document.querySelector('input[name="treatmentStatus"]:checked');
    treatmentStatus = treatmentStatus ? treatmentStatus.value : 'Tidak dinyatakan';
    
    let message = `*Tempahan Klinik Catoonies Vet*
👩‍⚕️ Nama Pemilik: ${ownerName}
🆔 No. IC: ${ownerIC}
🏡 Alamat: ${ownerAddress}
📱 No. H/P: ${ownerPhone}
📧 Email: ${ownerEmail}

🐱 Nama Kucing: ${catName}
🎂 Umur: ${catAge}
🐾 Jenis Baka: ${catBreed}
🗓️ Tarikh Nak Datang: ${appointmentDate}
🩺 Tujuan Pemeriksaan: ${appointmentReason}
📌 Status Rawatan: ${treatmentStatus}`;
    
    let whatsappUrl = `https://api.whatsapp.com/send?phone=60182624047&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
