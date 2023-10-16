///Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
//> For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

let prompt = require('prompt-sync')();
let input = prompt(' enter speed:');
function checkPoint(speed) {
    const speedLimit = 70
    const kmPerDEmeritPoints = 5
    
   

    if (speed <= speedLimit) {
        console.log("OK")
    } 
    else{
        let meritPoints = (`${speed - speedLimit / kmPerDEmeritPoints}`) 
        console.log(meritPoints)

        if (meritPoints >= 12) {
            console.log("License suspended");
          } else {
            console.log(`${meritPoints}`);
          }

    }
        

 }
console.log(checkPoint(input))
