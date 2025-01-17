const projectTitles = document.querySelectorAll('.skillHolder .exampleHolder');

// Hole alle <h2>-Elemente


// Event-Listener hinzufügen
projectTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Hole die beschreibende Section und den Medienbereich
        const descr = title.querySelector('.hideContent');

        // Sicherstellen, dass descr und media existieren, bevor die Klasse geändert wird
        if (descr) {
            descr.classList.toggle('open');
        } else {
            console.error('Kein .exampleDescription gefunden.');
        }
    });
});

document.querySelectorAll('.themeProject1').forEach((container) => {
    container.querySelector('.projectTitle').addEventListener('click', () => {
      // Alle anderen geöffneten Elemente schließen
      document.querySelectorAll('.themeProject1.show').forEach((openContainer) => {
        if (openContainer !== container) {
          openContainer.classList.remove('show');
        }
      });
  
      // Aktuelles Element ein- oder ausklappen
      container.classList.toggle('show');
    });
  });

  function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex'; // Zeigt das Modal an
    modalImage.src = image.src; // Setzt das Bild im Modal
  }
  
  // Schließt das Modal
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }