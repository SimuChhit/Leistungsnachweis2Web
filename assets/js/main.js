document.addEventListener("DOMContentLoaded", function () {
    // Selektiert alle Thumbnail-Items
    const thumbnails = document.querySelectorAll('.thumbnail__item');

    // Fügt jedem Thumbnail-Item einen Click-Event-Listener hinzu
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Liest das 'data-target' Attribut des geklickten Thumbnails
            const targetId = this.getAttribute('data-target');

            // Selektiert das aktive Carousel-Item und entfernt die Klasse 'active'
            const activeItem = document.querySelector('.magazin__item.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }

            // Findet das Carousel-Item, das dem 'data-target' entspricht, und fügt die Klasse 'active' hinzu
            const targetItem = document.querySelector(targetId);
            if (targetItem) {
                targetItem.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Show the nav menu when nav toggle button is clicked
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('nav__menu--visible');
        });
    }

    // Hide the nav menu when nav close button is clicked
    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('nav__menu--visible');
        });
    }
});
