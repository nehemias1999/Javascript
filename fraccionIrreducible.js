
/*

Crea un programa que dado un número entre 0,0001 y 0,9999 (y de no más de 4 cifras decimales), 
obtenga y muestre la correspondiente fracción irreducible.

Por ejemplo, el número 0,25 se puede obtener a partir de 25/100, o de 2/8, o de 1/4, entre otros. 
La fracción irreducible es 1/4, que está formada por un numerador y un denominador que son primos entre sí.

*/

function maximumCommonDivider(numberOne, numberTwo) {
    if(numberTwo == 0) {
        return numberOne;
    }
    return maximumCommonDivider(numberTwo, numberOne % numberTwo);
}

function convertToFraction(number) {
    let numerator = number;
    let denominator = 1;

    while(numerator % 1 != 0) {
        numerator = numerator * 10;
        denominator *= 10;
    }

    let MCD = maximumCommonDivider(numerator, denominator);

    return [numerator /= MCD, denominator /= MCD];
}