//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


let prompt = require('prompt-sync')();
let input = prompt('Input salary: ');
let salary = parseFloat(input);

const pay = salary;

const netTax = () => (
  pay <= 24000 ? pay * 0.1 :
  24001 <= pay && pay <= 32333 ? pay * 0.25 :
  32334 <= pay && pay <= 500000 ? pay * 0.3 :
  500001 <= pay && pay <= 800000 ? pay * 0.325 :
  pay * 0.35
);

console.log("Net tax: " + netTax(salary));

const nhif = () => (
  pay < 5999 ? 150 :
  6000 <= pay && pay <= 7999 ? 300 :
  8000 <= pay && pay <= 11999 ? 400 :
  12000 <= pay && pay <= 14999 ? 500 :
  15000 <= pay && pay <= 19999 ? 600 :
  20000 <= pay && pay <= 24999 ? 750 :
  25000 <= pay && pay <= 29999 ? 850 :
  30000 <= pay && pay <= 34999 ? 900 :
  35000 <= pay && pay <= 39999 ? 950 :
  40000 <= pay && pay <= 44999 ? 1000 :
  45000 <= pay && pay <= 49999 ? 1100 :
  50000 <= pay && pay <= 59999 ? 1200 :
  60000 <= pay && pay <= 69999 ? 1300 :
  70000 <= pay && pay <= 79000 ? 1400 :
  80000 <= pay && pay <= 89999 ? 1500 :
  100000 <= pay && pay <= 99999 ? 1600 :
  1700
);

console.log("NHIF: " + nhif(salary));

const nssf = () => pay * 0.06;

console.log("Pension: " + nssf());

console.log("Net Income: " + (salary - (netTax() + nhif() + nssf())));

