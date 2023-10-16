//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
let prompt = require('prompt-sync')();
let input = prompt('Input grade: ');

function grade (marks) {
    if(marks > 100){
        console.log("error ")
    }
    if (marks >= 79 && marks <= 100) {
        console.log ("A");
    } else if (marks >= 60 && marks <=78) {
        console.log ("B")
    } else if (marks >= 50 && marks <=59) {
        console.log ("C");
    } else if (marks >= 40 && marks<=49) { 
        console.log ("D");
    } else {
        console.log ("E");
    }
}

console.log(grade(input))