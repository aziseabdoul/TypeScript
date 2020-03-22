class Rectangle {
    largeur: number;
    hauteur: number;
    x?: number;
    y?: number
    constructor (largeur: number, hauteur: number, x?: number, y?: number) {
        this.largeur = 100;
        this.hauteur = 100;
        this.x = x;
        this.y = y;

        
    }

    // toto = function (a: number,b: number) {
    //     a = this.x;
    //     b = this.y

    //     return new Rectangle(100, 100, a, b);
    // }

}

const unRectangle = new Rectangle(1,2);

console.log(unRectangle);