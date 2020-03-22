interface Recette {
    nom: string,
    nombreDePersonnes: number,
    type: string,
    ingredients?: string[],
    prix?: string

}

const recette1: Recette = {
    nom: 'spaghettis bolognaise',
    nombreDePersonnes: 8,
    type: 'plat',
    ingredients: ['spaghettis', ' huile d\'olive', ' tomates', ' oignons', ' viande hachee', ' sel']
}

const recette2: Recette = {
    nom: 'ratatouille',
    nombreDePersonnes: 4,
    type: 'plat',
    prix: 'bon marché'
}

function toto(recette: Recette) {
    if (recette.nombreDePersonnes > 4 && recette.ingredients != null) {
        console.log(`${recette.nom} ${recette.ingredients}`)
    } else if(recette.prix != null) {
        console.log(`${recette.nom} ${recette.prix}`)
        
    }
    
    else {
        console.log(`${recette.nom}`)
    }
}