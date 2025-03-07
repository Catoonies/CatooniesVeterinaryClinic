<!-- index.html -->
<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catoonies Veterinary Clinic</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Catoonies Veterinary Clinic</h1>
        <nav>
            <ul>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Perkhidmatan</a></li>
                <li><a href="#">Tempahan</a></li>
                <li><a href="#">Hubungi Kami</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h2>Selamat Datang ke Catoonies Vet</h2>
        <p>Klinik khusus untuk kesihatan kucing kesayangan anda.</p>
    </section>

    <section class="services">
        <h3>Pilih Servis</h3>
        <div class="buttons">
            <button class="service-button" data-service="Pemeriksaan">Pemeriksaan</button>
            <button class="service-button" data-service="Pemandulan">Pemandulan</button>
            <button class="service-button" data-service="Vaksinasi">Vaksinasi</button>
            <button class="service-button" data-service="Grooming">Grooming</button>
            <button class="service-button" data-service="Boarding">Boarding</button>
            <button class="service-button" data-service="Wad">Wad</button>
            <button class="service-button" data-service="X-ray">X-ray</button>
            <button class="service-button" data-service="Ultrasound">Ultrasound</button>
            <button class="service-button" data-service="Pemeriksaan Darah">Pemeriksaan Darah</button>
        </div>
    </section>

    <section id="form-container" class="hidden">
        <h3>Maklumat Tempahan</h3>
        <form id="booking-form">
            <label>Nama Pemilik:</label>
            <input type="text" id="owner-name" required>
            
            <label>No. IC:</label>
            <input type="text" id="owner-ic" required>
            
            <label>No. H/P:</label>
            <input type="text" id="owner-phone" required>
            
            <label>Nama Kucing:</label>
            <input type="text" id="pet-name" required>
            
            <input type="hidden" id="selected-service">
            
            <button type="submit">Hantar ke WhatsApp</button>
        </form>
    </section>
    
    <script src="script.js"></script>
</body>
</html>

/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    text-align: center;
}

header {
    background-color: #4CAF50;
    padding: 15px;
    color: white;
    text-align: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

.hero {
    background-color: #e0f7fa;
    padding: 20px;
}

.buttons button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
}

.hidden {
    display: none;
}

/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".service-button");
    const formContainer = document.getElementById("form-container");
    const selectedService = document.getElementById("selected-service");
    const form = document.getElementById("booking-form");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            selectedService.value = this.dataset.service;
            formContainer.classList.remove("hidden");
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const ownerName = document.getElementById("owner-name").value;
        const ownerIC = document.getElementById("owner-ic").value;
        const ownerPhone = document.getElementById("owner-phone").value;
        const petName = document.getElementById("pet-name").value;
        const service = selectedService.value;

        const whatsappMessage = `Nama Pemilik: ${ownerName}%0ANo. IC: ${ownerIC}%0ANo. H/P: ${ownerPhone}%0ANama Kucing: ${petName}%0AServis: ${service}`;
        window.open(`https://wa.me/60182624047?text=${whatsappMessage}`, "_blank");
    });
});
