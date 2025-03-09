// Pastikan AOS diaktifkan untuk animasi scroll
AOS.init({
    duration: 800,  // Kelajuan animasi
    easing: "ease-in-out",
    once: true // Animasi hanya berlaku sekali
});

// Navbar berubah warna apabila skrol
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scrolling apabila klik pada pautan dalam navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,  // Laraskan offset
                behavior: "smooth"
            });
        }
    });
});
