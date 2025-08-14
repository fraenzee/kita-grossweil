// src/scripts/burgerMenu.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.burger-menu-toggle');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            
            toggleButton.setAttribute('aria-expanded', (!isExpanded).toString());
            toggleButton.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-open');
        });
    }
});