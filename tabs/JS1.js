// Gestion des Tabs avec une boucle classique
// Je récupère tous les éléments qui ont la classe .tab
const listTabAlt = document.getElementsByClassName("tab");

for (let i = 0; i < listTabAlt.length; i++) {
    const tab = listTabAlt[i];
    tab.addEventListener("click", function () {
        // Retirer la classe "active" de tous les tabs
        for (let j = 0; j < listTabAlt.length; j++) {
            const tab = listTabAlt[j];
            tab.classList.remove("tab-active"); // Corrigé : La classe est "tab-active" et non "active"
        }

        // Ajouter la classe "tab-active" au tab cliqué
        this.classList.add("tab-active");

        // Récupération des classes associées
        const classTab = this.classList;
        const listContentAlt = document.getElementsByClassName("content");

        // Retirer la classe "visible" de tous les contenus
        for (let j = 0; j < listContentAlt.length; j++) {
            const content = listContentAlt[j];
            content.classList.remove("visible"); // Corrigé : La classe à retirer est "visible"
        }

        // Vérifie la classe spécifique du tab cliqué et affiche le contenu correspondant
        if (classTab.contains("tab-content1")) { // Corrigé : Vérification correcte des classes
            document.querySelector(".content1").classList.add("visible");
        } else if (classTab.contains("tab-content2")) {
            document.querySelector(".content2").classList.add("visible");
        } else if (classTab.contains("tab-content3")) {
            document.querySelector(".content3").classList.add("visible");
        }
    });
}
