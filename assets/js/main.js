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

// Navigation für smartphone Geräte
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Show menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav__menu--visible');
    });

    // Hide menu
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('nav__menu--visible');
    });
});


// Tabelle erstellen
document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/files/shops.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('shops-table-body');
            data.forEach(shop => {
                const row = document.createElement('tr');

                const locationCell = document.createElement('td');
                locationCell.textContent = shop.location;
                row.appendChild(locationCell);

                const shopNameCell = document.createElement('td');
                shopNameCell.textContent = shop.shopName;
                row.appendChild(shopNameCell);

                const contactCell = document.createElement('td');
                contactCell.textContent = shop.contact;
                row.appendChild(contactCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


