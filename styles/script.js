
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar ul');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
