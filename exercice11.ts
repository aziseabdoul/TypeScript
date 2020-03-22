interface FicheDeFilm {
    titre: string;
    realisateur: string;
    anneeDeTournage: number;
    genre: string[]
}

const film1: FicheDeFilm = {
    titre: 'Star Wars IV : un nouvel espoir',
    realisateur: 'George Lucas',
    anneeDeTournage: 1977,
    genre: ['Fantastique', ' space opera']
};

const film2: FicheDeFilm = {
    titre: 'Batman begins',
    realisateur: 'Christopher Nolan',
    anneeDeTournage: 2006,
    genre: ['Fantastique']
};

function fiche1(film1: FicheDeFilm) {
    console.log(`${film1.titre} a été réalisé par ${film1.realisateur} en ${film1.anneeDeTournage}. Il est de genre(s) : ${film1.genre}`)
}

function fiche2(film2: FicheDeFilm) {
    console.log(`${film2.titre} a été réalisé par ${film2.realisateur} en ${film2.anneeDeTournage}. Il est de genre(s) : ${film2.genre}`)
}

fiche1(film1);
fiche2(film2)