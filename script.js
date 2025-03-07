document.addEventListener("DOMContentLoaded", function () {
    console.log("Laman web telah dimuatkan");

    // Navigasi menu toggle untuk mudah alih
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Fungsi untuk sistem tempahan (contoh asas)
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Tempahan anda telah diterima! Kami akan hubungi anda segera.");
        });
    }

    // Hantar notifikasi WhatsApp (contoh)
    const whatsappButton = document.getElementById("whatsapp-button");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            window.open("https://wa.me/60182624047?text=Hai%20saya%20ingin%20membuat%20tempahan", "_blank");
        });
    }
});
