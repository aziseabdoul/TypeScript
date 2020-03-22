var film1 = {
    titre: 'Star Wars IV : un nouvel espoir',
    realisateur: 'George Lucas',
    anneeDeTournage: 1977,
    genre: ['Fantastique', ' space opera']
};
var film2 = {
    titre: 'Batman begins',
    realisateur: 'Christopher Nolan',
    anneeDeTournage: 2006,
    genre: ['Fantastique']
};
function fiche1(film1) {
    console.log(film1.titre + " a \u00E9t\u00E9 r\u00E9alis\u00E9 par " + film1.realisateur + " en " + film1.anneeDeTournage + ". Il est de genre(s) : " + film1.genre);
}
function fiche2(film2) {
    console.log(film2.titre + " a \u00E9t\u00E9 r\u00E9alis\u00E9 par " + film2.realisateur + " en " + film2.anneeDeTournage + ". Il est de genre(s) : " + film2.genre);
}
fiche1(film1);
fiche2(film2);
