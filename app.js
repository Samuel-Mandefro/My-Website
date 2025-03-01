document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', function () {
        // Toggle the 'is-active' class on the hamburger menu
        menu.classList.toggle('is-active');
        
        // Toggle the 'active' class on the navbar menu
        menuLinks.classList.toggle('active');
    });
});
