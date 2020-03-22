enum prenoms {
    prenom1 = 1,
    prenom2,
    prenom3,
    prenom4,
    prenom5,
    prenom6,
};

console.log(prenoms.prenom3);

const sixiemePrenom: string = prenoms[6];

console.log(`Je m'appelle ${sixiemePrenom}.`);