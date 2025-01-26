document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission par défaut

    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    let errorList = document.getElementById("errorList");
    let isValid = true;
    const checkboxes = document.querySelectorAll('input[name="qcm"]:checked');

    // Réinitialise les erreurs et styles
    errorList.innerHTML = ""; 
    [nom, prenom, email, password, confirmPassword].forEach(field => field.classList.remove("error", "success"));

    // Validation du nom
    if (nom.value.trim() === "") {
        addError("Nom invalide.", nom);
        isValid = false;
    }

    // Validation du prénom
    if (prenom.value.trim() === "") {
        addError("Prénom invalide.", prenom);
        isValid = false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        addError("Email invalide.", email);
        isValid = false;
    }

    // Mot de passe
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/;
    if (!passwordRegex.test(password.value)) {
        addError(
            "Le mot de passe doit contenir une majuscule, un chiffre, un caractère spécial, et être entre 8 et 16 caractères.",
            password
        );
        isValid = false;
    }

    // Confirmation du mot de passe
    if (password.value !== confirmPassword.value) {
        addError("Les mots de passe ne correspondent pas.", confirmPassword);
        isValid = false;
    }
    
    // Vérification des checkboxes
    const errorMsg = document.querySelector('fieldset small.error-msg');
    if (checkboxes.length === 0) {
        addError("Veuillez sélectionner au moins une option dans question.")
        isValid = false;
    } else {
        errorMsg.style.display = "none";
    }

    // Si le formulaire est valide
    if (isValid) {
        alert("Formulaire envoyé avec succès !");
    } else {
        console.log("Formulaire invalide. Vérifiez les erreurs.");
    }
});

// Fonction pour afficher une erreur
function addError(message, field) {
    let liError = document.createElement("li");
    liError.innerText = message;
    document.getElementById("errorList").appendChild(liError); // Affiche le message dans la liste
    field.classList.add("error"); // Ajoute une bordure rouge
}

const form = document.getElementById("myForm");

const video = document.getElementById("backgroundVideo");

const titre = document.getElementById("titre-principal");

const texteDynamique = document.getElementById("texte-dynamique");

form.addEventListener("mouseenter", () => {
    video.style.opacity = "0"; // Cache la vidéo (devient noir)
});

form.addEventListener("mouseleave", () => {
    video.style.opacity = "1"; // Affiche à nouveau la vidéo
});

// Vérifiez si les éléments existent avant d'ajouter les événements
if (form && video && titre) {
    // Lors du survol du formulaire, changer la couleur du titre en noir
    form.addEventListener("mouseenter", () => {
        titre.style.color = "black"; // Changer la couleur en noir
    });

    // Lorsque la souris quitte le formulaire, restaurer la couleur du titre
    form.addEventListener("mouseleave", () => {
        titre.style.color = ""; // Restaurer la couleur initiale
    });
} else {
    console.error("Un ou plusieurs éléments n'ont pas été trouvés.");
}

// Vérifiez si les éléments existent avant d'ajouter les événements
if (form && titre && texteDynamique) {
    // Lors du survol du formulaire, cacher le titre et afficher le texte dynamique
    form.addEventListener("mouseenter", () => {
        texteDynamique.style.display = "block"; // Afficher le texte dynamique
        
    });

    // Lorsque la souris quitte le formulaire, restaurer le titre et cacher le texte dynamique
    form.addEventListener("mouseleave", () => {
        texteDynamique.style.display = "none"; // Cacher le texte dynamique
    });
} else {
    console.error("Un ou plusieurs éléments n'ont pas été trouvés.");
}


    // Vérification des QCM
    if (checkboxes.length === 0) {
        const errorMsg = document.querySelector('fieldset small.error-msg');
        errorMsg.textContent = "Veuillez sélectionner au moins une option.";
        errorMsg.style.display = "block";
        isValid = false;
    } else {
        const errorMsg = document.querySelector('fieldset small.error-msg');
        errorMsg.style.display = "none";
    }

    if (isValid) {
        alert("Formulaire soumis avec succès !");
    };
