let uneVariable: string = "une variable";

console.log(uneVariable);

function changeText() {
    document.getElementById('para').innerHTML = uneVariable; 
};

changeText();