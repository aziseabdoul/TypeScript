const mots: string[] = ["mot1", "mot2", "mot3"];

console.log(mots[0]);

let tabVideDeNombres: number[] = [];

for (let i = 0; i < 3; i++) {
    tabVideDeNombres.push(i);
    
};

console.log(tabVideDeNombres);

const parfumsDeGlaces: string[] = ['chocolat', 'vanille', 'fraise'];

function changeText() {
    document.getElementById('para').innerHTML = `Mon parfum préféré c'est ${parfumsDeGlaces[0]}.`
};

changeText();