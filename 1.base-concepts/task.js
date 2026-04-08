"use strict";

function solveEquation(a, b, c) {
  let arr = [];

 
  const discriminant = b ** 2 - 4 * a * c;


  if (discriminant < 0) {
    return arr;
  }


  if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  }


  if (discriminant > 0) {
    const sqrtD = Math.sqrt(discriminant);
    const root1 = (-b + sqrtD) / (2 * a);
    const root2 = (-b - sqrtD) / (2 * a);

    arr.push(root1, root2);
    return arr;
  }

  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    const monthlyRate = (percent / 100) / 12;


    const loanBody = amount - contribution;


    if (loanBody <= 0) {
        return 0;
    }


    const power = Math.pow(1 + monthlyRate, countMonths);
    const monthlyPayment = loanBody * (monthlyRate * power) / (power - 1);


    const totalPayment = monthlyPayment * countMonths;


    return Number(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));    
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); 
console.log(calculateTotalMortgage(10, 0, 20000, 24));   
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 0, 10000, 36));    
console.log(calculateTotalMortgage(15, 0, 10000, 36)); 