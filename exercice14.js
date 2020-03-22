var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, hauteur, x, y) {
        this.largeur = 100;
        this.hauteur = 100;
        this.x = x;
        this.y = y;
    }
    return Rectangle;
}());
var unRectangle = new Rectangle(1, 2);
console.log(unRectangle);
