// Sélectionner le bouton
const darkModeToggle = document.getElementById('darkModeToggle');

// Fonction pour basculer le Dark Mode
darkModeToggle.addEventListener('click', () => {
    // Basculer la classe "dark-mode" sur le body
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');

    // Changer le texte du bouton en fonction du mode actif
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "Activer le Light Mode"; // Passer au mode clair
    } else {
        darkModeToggle.textContent = "Activer le Dark Mode"; // Passer au mode sombre
    }
});
