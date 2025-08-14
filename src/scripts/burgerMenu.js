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

// JavaScript-Logik für die Menühöhe beim Scrollen
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const headerContent = header.querySelector('.container');
    const navLinks = header.querySelectorAll('nav a');
    
    const scrolledClass = 'py-4'; // Kleinere Polsterung
    const defaultClass = 'py-6'; // Standard-Polsterung

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        // Beim Scrollen nach unten
        headerContent.classList.remove(defaultClass);
        headerContent.classList.add(scrolledClass);
        navLinks.forEach(link => {
          link.classList.remove(defaultClass);
          link.classList.add(scrolledClass);
        });
      } else {
        // Oben auf der Seite
        headerContent.classList.remove(scrolledClass);
        headerContent.classList.add(defaultClass);
        navLinks.forEach(link => {
          link.classList.remove(scrolledClass);
          link.classList.add(defaultClass);
        });
      }
    });
  });