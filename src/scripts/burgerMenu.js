  // JavaScript-Logik für das Burgermenü und die Header-Höhe
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');
    const burgerIcon = document.getElementById('burger-icon');
    const closeIcon = document.getElementById('close-icon');

    const header = document.getElementById('main-header');
    const headerContent = header.querySelector('.container');

    // Burger-Menü-Logik
    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            
            toggleButton.setAttribute('aria-expanded', (!isExpanded).toString());
            mobileMenu.classList.toggle('is-open');

            if (isExpanded) {
                burgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                burgerIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });
    }

    // Scroll-Logik für die Header-Höhe
    const scrolledPaddingClass = 'py-4'; // Kleinere Polsterung
    const defaultPaddingClass = 'py-6'; // Standard-Polsterung

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        headerContent.classList.remove(defaultPaddingClass);
        headerContent.classList.add(scrolledPaddingClass);
      } else {
        headerContent.classList.remove(scrolledPaddingClass);
        headerContent.classList.add(defaultPaddingClass);
      }
    });
  });