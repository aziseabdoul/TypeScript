let unObjet: { chaine1: string, chaine2: string, nombre: number, tabDeTextes: string[], tabVide: number[] } = {
    chaine1: 'mot1',
    chaine2: 'mot2',
    nombre: 1,
    tabDeTextes: ['texte1', 'texte2', 'texte3'],
    tabVide: []
};

for (let i = 0; i < unObjet.tabDeTextes.length; i++) {
    console.log(unObjet.tabDeTextes[i]);
    
};

for (let i = 0; i < 4; i++) {
    unObjet.tabVide.push(i);
};
console.log(unObjet.tabVide);

let somme: number = 0;
for (let i = 0; i < unObjet.tabVide.length; i++) {
    somme += unObjet.tabVide[i];
};

console.log(somme);


