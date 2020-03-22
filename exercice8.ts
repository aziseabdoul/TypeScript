// SIgnature !!!!
/*const doubler: (valeur: number) => number = function(valeur) {
    // blablabla
    return 45;
}*/
// Inférence
/*const doubler = function(valeur: number) : number {
    return 45;
}*/

const doubler = (valeur: number): number => {
        return valeur * 2;
      };
      console.log(doubler(5));
      
const direBonjour = (nom?: string): void => {
        if (nom === undefined) {
        nom = 'Bart Simpson';
        }
        console.log(`Bonjour ${nom}`);
      };
      direBonjour('Marc');
      direBonjour();