// Sélectionner l'élément du bouton de bascule pour le Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');

// Ajouter un écouteur d'événement sur le bouton pour détecter un clic
darkModeToggle.addEventListener('click', () => {
    // Basculer la classe "dark-mode" sur le body lorsque le bouton est cliqué
    // Cela permet de passer du mode clair au mode sombre (ou inversement)
    document.body.classList.toggle('dark-mode');
    // Basculer également la classe "dark-mode" sur l'élément <header>
    // Cela permet de modifier le style du header en fonction du mode
    document.querySelector('header').classList.toggle('dark-mode');
});

// Sélectionner l'élément body
const body = document.body;

// Ajouter un écouteur d'événement pour détecter un changement d'état du bouton (si c'est un élément de type checkbox)
darkModeToggle.addEventListener('change', () => {
    // Si le bouton est coché (mode sombre activé)
    if (darkModeToggle.checked) {
        
        // Changer le fond du body pour la couleur du mode sombre
        body.style.backgroundColor = '#121212'; // Mode sombre
        // Changer la couleur du texte pour la couleur du mode sombre
        body.style.color = '#ffffff';
    } else {
        // Sinon, changer le fond pour la couleur du mode clair
        body.style.backgroundColor = '#ffffff'; // Mode clair
        // Changer la couleur du texte pour la couleur du mode clair
        body.style.color = '#000000';
    }
});
