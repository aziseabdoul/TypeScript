var NOM_ORDINATEUR = 'hp';
var TAILLE_MONITEUR = 15;
console.log(NOM_ORDINATEUR);
console.log(TAILLE_MONITEUR);
function changeText() {
    document.getElementById('para').innerHTML = "Mon " + NOM_ORDINATEUR + " a un \u00E9cran de " + TAILLE_MONITEUR + " pouces.";
}
;
changeText();
