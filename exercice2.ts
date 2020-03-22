let NOM_ORDINATEUR: string = 'hp';
let TAILLE_MONITEUR: number = 15;

console.log(NOM_ORDINATEUR);
console.log(TAILLE_MONITEUR);

function changeText() {
    document.getElementById('para').innerHTML = `Mon ${NOM_ORDINATEUR} a un écran de ${TAILLE_MONITEUR} pouces.`; 
};

changeText();

