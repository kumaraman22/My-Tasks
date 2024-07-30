document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.navbar-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


