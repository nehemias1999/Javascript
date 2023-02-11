
/*
* Complete the 'countingValleys' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
* 1. INTEGER steps
* 2. STRING path
*/

const MAX_STEPS = Math.pow(10, 6);

function count(path) {
    let valleyCounter = 0;
    let seaLevel = 0;

    path.forEach(element => {
        if(element == 'U')
            seaLevel++;
        
        if(element == 'D') {
            seaLevel--;
            if(seaLevel == 0)
                valleyCounter++;
        }
    });

    return valleyCounter;
}

function countingValleys(steps, path) {
    if((steps < 2) || (steps > MAX_STEPS)) return 0;
    
    let convertedPath = path.split('');

    return count(convertedPath);    
}

const path = 'UDDDUDUUU';

const steps = path.length;

console.log(countingValleys(steps, path));