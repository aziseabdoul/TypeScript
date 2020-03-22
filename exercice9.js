document.getElementById("sub").addEventListener("click", function (event) {
    event.preventDefault();
    console.log(document.getElementById('n1').value);
    console.log(document.getElementById('n2').value);
    function addAndMultiply() {
        var a = parseInt(document.getElementById('n1').value);
        var b = parseInt(document.getElementById('n2').value);
        var c = a + b;
        var d = a * b;
        var tab = [];
        tab.push(c);
        tab.push(d);
        console.log(tab);
        //console.log(c);
        //console.log(d);
        document.getElementById('text').innerHTML = "la somme donne " + tab[0] + " et la multiplication donne " + tab[1] + ".";
    }
    addAndMultiply();
});
