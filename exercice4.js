var mots = ["mot1", "mot2", "mot3"];
console.log(mots[0]);
var tabVideDeNombres = [];
for (var i = 0; i < 3; i++) {
    tabVideDeNombres.push(i);
}
;
console.log(tabVideDeNombres);
var parfumsDeGlaces = ['chocolat', 'vanille', 'fraise'];
function changeText() {
    document.getElementById('para').innerHTML = "Mon parfum pr\u00E9f\u00E9r\u00E9 c'est " + parfumsDeGlaces[0] + ".";
}
;
changeText();
