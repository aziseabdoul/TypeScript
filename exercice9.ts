document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault();
    console.log((<HTMLInputElement>document.getElementById('n1')).value);
    console.log((<HTMLInputElement>document.getElementById('n2')).value);

    function addAndMultiply() {
        let a = parseInt((<HTMLInputElement>document.getElementById('n1')).value);
        let b = parseInt((<HTMLInputElement>document.getElementById('n2')).value);
        let c = a+b;
        let d = a*b;

        const tab: number[] = [];

        tab.push(c);
        tab.push(d);

        console.log(tab);

        //console.log(c);
        //console.log(d);

        document.getElementById('text').innerHTML = `la somme donne ${tab[0]} et la multiplication donne ${tab[1]}.`

    }

    addAndMultiply();


  });