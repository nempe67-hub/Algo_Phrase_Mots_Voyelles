function analyserPhrase(phrase) {
    // Initialisation des trois compteurs
    let longueur = 0;
    let nb_mots = 0;
    let nb_voyelles = 0;

    // Liste des voyelles pour la vérification
    const voyelles = "aeiouyAEIOUY";

    // Parcours de la phrase caractère par caractère
    for (let c of phrase) {

        // CORRECTION : Arrêt AU POINT AVANT tout comptage
        // (dans la version originale, le point était compté dans longueur et voyelles)
        if (c === '.') {
            break;
        }

        longueur += 1;

        // Comptage des voyelles
        if (voyelles.includes(c)) {
            nb_voyelles += 1;
        }

        // Comptage des mots basé sur l'espace
        if (c === ' ') {
            nb_mots += 1;
        }
    }

    // Ajustement pour le dernier mot avant le point
    if (longueur > 1) {
        nb_mots += 1;
    }

    // Affichage des résultats
    console.log("Longueur de la phrase : " + longueur);
    console.log("Nombre de mots : " + nb_mots);
    console.log("Nombre de voyelles : " + nb_voyelles);
}

// Exemple d'utilisation :
const maPhrase = "Ceci est un exercice de programmation.";
analyserPhrase(maPhrase);