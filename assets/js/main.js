document.querySelectorAll('.thumbnail__item').forEach(item => {
    item.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const carouselItems = document.querySelectorAll('.carousel__item');
        carouselItems.forEach(item => {
            item.classList.remove('active');  // Entfernt die 'active' Klasse
            if (item.id === targetId.substring(1)) {
                item.classList.add('active');  // Fügt die 'active' Klasse hinzu
                // Starte Animation durch Hinzufügen einer spezifischen Klasse
                item.classList.add('start-animation');
            }
        });
    });
});
