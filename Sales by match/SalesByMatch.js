
/*
Function Description

Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):
    
    int numberOfSocks: the number of socks in the pile
    int socks[numberOfSocks]: the colors of each sock

Returns

int: the number of pairs

Input Format

The first line contains an integer , the number of socks represented in .
The second line contains space-separated integers, , the colors of the socks in the pile.

constraints

    1 <= numberOfPairs <= 100
    1 <= socks[index] <= 100 where 0 <= index < numberOfSocks

*/

function countPairs(socks) {
    let sameNumberOfSocks = new Map(); 
    let countOfPairs = 0;

    socks.forEach(element => {
        if(sameNumberOfSocks.has(element)) {
            let oldNumberOfSocks = sameNumberOfSocks.get(element);
            
            if(oldNumberOfSocks == 1) {
                countOfPairs++;
                sameNumberOfSocks.set(element, 0);
            } else { 
                sameNumberOfSocks.set(element, oldNumberOfSocks + 1);
            }
        } else {
            sameNumberOfSocks.set(element, 1);
        }
    });

    return countOfPairs;
}

function salesByMatch(numberOfSocks, socks) {
    if((numberOfSocks < 1) || (numberOfSocks > 100)) return socks;

    return countPairs(socks);
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const numberOfSocks = socks.length;

console.log(salesByMatch(numberOfSocks, socks));