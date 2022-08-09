
/*

Seguro que has visto textos como "The quick brown fox jumps over the lazy dog" 
o "El veloz murciélago hindú comía feliz cardillo y kiwi. 
La cigüeña tocaba el saxofón detrás del palenque de paja" . 
Son "pangramas", textos que contienen todas las letras de un cierto alfabeto, quizá repetidas.

Deberás crear un programa que reciba una frase y que diga si es un pangrama o no. 
Sólo deberás considerar las letras del alfabeto inglés (no te preocupes por las vocales acentuadas ni la eñe, 
entre otras), que podrán aparecer en mayúsculas o en minúsculas.

*/

function isPangram(phrase) {
    let arrayOfChars = [];
    let position = 0;

    while(position < phrase.length) {

        toValidate = phrase[position].toLowerCase();        
        if((!arrayOfChars.includes(toValidate)) && (toValidate !== ' ')) {
            arrayOfChars.push(toValidate);
        }

        position += 1;
    }

    return (arrayOfChars.length == 26);
}