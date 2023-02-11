
/*
* Complete the 'gradingStudents' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts INTEGER_ARRAY grades as parameter.
*/

function round(grades) {    
    return grades.map(element => {
        if((element < 0) || (element > 100)) return 0;

        if((element < 38) || (element == 100)) return element

        let rest = element % 10;

        if((rest == 3) || (rest == 4)) return (element - rest) + 5;

        if((rest == 8) || (rest == 9)) return (element - rest) + 10;

        return element;
    })
}

function gradingStudents(grades) {
    if((grades.length < 1) || (grades.length > 60)) return grades;

    return round(grades);
}

const grades = [73, 67, 38, 33, 100, 66, 65];

console.log(gradingStudents(grades));