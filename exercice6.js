var prenoms;
(function (prenoms) {
    prenoms[prenoms["prenom1"] = 1] = "prenom1";
    prenoms[prenoms["prenom2"] = 2] = "prenom2";
    prenoms[prenoms["prenom3"] = 3] = "prenom3";
    prenoms[prenoms["prenom4"] = 4] = "prenom4";
    prenoms[prenoms["prenom5"] = 5] = "prenom5";
    prenoms[prenoms["prenom6"] = 6] = "prenom6";
})(prenoms || (prenoms = {}));
;
console.log(prenoms.prenom3);
var sixiemePrenom = prenoms[6];
console.log("Je m'appelle " + sixiemePrenom + ".");
