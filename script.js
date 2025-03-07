document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let nama = document.getElementById("nama").value;
        let telefon = document.getElementById("telefon").value;
        let perkhidmatan = document.getElementById("perkhidmatan").value;
        
        let message = `Tempahan berjaya!\nNama: ${nama}\nTelefon: ${telefon}\nPerkhidmatan: ${perkhidmatan}`;
        alert(message);
        
        this.reset();
    });
});
