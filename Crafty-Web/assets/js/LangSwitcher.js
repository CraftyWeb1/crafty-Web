document.addEventListener("DOMContentLoaded", function() {
    const languageSwitcher = document.getElementById("languageSwitcher");

    if (languageSwitcher) {
        // Mettez à jour le sélecteur avec la langue actuelle au chargement de la page
        const currentPath = window.location.pathname;
        if (currentPath.includes("/fr")) {
            languageSwitcher.value = "fr";
        } else if (currentPath.includes("/en")) {
            languageSwitcher.value = "en";
        }

        // Change de langue lorsque l'utilisateur sélectionne une option
        languageSwitcher.addEventListener("change", function() {
            const selectedLanguage = languageSwitcher.value;
            const currentPath = window.location.pathname;

            // Redirection vers la version correspondante en fonction de la langue
            if (selectedLanguage === "fr") {
                // Remplacer /en par /fr dans l'URL si nécessaire
                window.location.href = currentPath.replace("/en", "/fr");
            } else if (selectedLanguage === "en") {
                // Remplacer /fr par /en dans l'URL si nécessaire
                window.location.href = currentPath.replace("/fr", "/en");
            }
        });
    }
});
