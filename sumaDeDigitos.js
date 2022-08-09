
/*

Se trata de implementar un programa que sume los dígitos de un número entero no negativo. 
Por ejemplo, la suma de los dígitos del 3433 es 13.

Para darle un poco más de emoción, el programa no se limitará a escribir el resultado de la suma, 
sino que también escribirá todos los sumandos utilizados: 3 + 4 + 3 + 3 = 13.

*/

function summationOfDigits(number) {
    let rest = 0;
    let result = 0;
    let addends = new String('');

    while(number > 0) {
        rest = number % 10;
        if(addends.length == 0) {
            addends = rest + addends;           
        } else {
            addends = (rest + ' + ') + addends; 
        }
        result += rest;
        number = Math.floor(number / 10);
    }

    return addends + (" = " + result);
}