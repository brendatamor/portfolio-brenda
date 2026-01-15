
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    
    // Se o scroll passar de 50px, adiciona a classe, senão remove
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});




function copyEmail() {
    const email = "brendatamorux@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
        const emailLink = document.getElementById('emailLink');
        const originalText = emailLink.innerText;

        // --- FEEDBACK DE SUCESSO ---
        emailLink.innerText = "E-mail copiado!";
        emailLink.style.color = "#4BB543"; // Aquele verde bonitinho de sucesso
        emailLink.style.fontWeight = "bold"; // Deixa um pouco mais evidente

        // Volta ao estado original após 2 segundos
        setTimeout(() => {
            emailLink.innerText = originalText;
            emailLink.style.color = ""; // Remove o verde e volta para a cor do seu CSS
            emailLink.style.fontWeight = ""; 
        }, 2000);

    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}