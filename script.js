/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.textContent;
            showForm(serviceName);
        });
    });
});

function showForm(service) {
    document.getElementById('form-container').classList.remove('hidden');
    document.getElementById('selected-service').value = service;
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ownerName = document.getElementById('owner-name').value;
    const ownerIC = document.getElementById('owner-ic').value;
    const ownerPhone = document.getElementById('owner-phone').value;
    const petName = document.getElementById('pet-name').value;
    const serviceType = document.getElementById('selected-service').value;

    const message = `Nama Pemilik: ${ownerName}%0ANo. IC: ${ownerIC}%0ANo. H/P: ${ownerPhone}%0ANama Kucing: ${petName}%0AServis: ${serviceType}`;
    
    const whatsappURL = `https://wa.me/60182624047?text=${message}`;
    window.open(whatsappURL, '_blank');
});
