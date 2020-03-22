var recette1 = {
    nom: 'spaghettis bolognaise',
    nombreDePersonnes: 8,
    type: 'plat',
    ingredients: ['spaghettis', ' huile d\'olive', ' tomates', ' oignons', ' viande hachee', ' sel']
};
var recette2 = {
    nom: 'ratatouille',
    nombreDePersonnes: 4,
    type: 'plat',
    prix: 'bon marché'
};
function toto(recette) {
    if (recette.nombreDePersonnes > 4 && recette.ingredients != null) {
        console.log(recette.nom + " " + recette.ingredients);
    }
    else if (recette.prix != null) {
        console.log(recette.nom + " " + recette.prix);
    }
    else {
        console.log("" + recette.nom);
    }
}
