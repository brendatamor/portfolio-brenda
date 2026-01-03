
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    
    // Se o scroll passar de 50px, adiciona a classe, senão remove
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});