// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/





// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/




// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/




// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/





// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/





// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/




// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/




// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */


let principal = 200000;
let interestRate = 0.05;
let years = 30;

var name = 'Jake';

// M = monthlyRate

let monthlyInterestRate = interestRate/12;
console.log('Monthly Interest Rate');
console.log(monthlyInterestRate);

let periods = years*12;
console.log('Number of monthly payments');
console.log(periods);

// M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

let monthlyRate = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods)/(Math.pow(1 + monthlyInterestRate, periods) - 1);


console.log('Monthly Payment')
console.log(monthlyRate);

function mCalculator() {
  return name + ", your monthly rate is $" + (Math.round(monthlyRate * 100)/100);
} 
console.log(mCalculator());


function mortgageCalculator(principal, interestRate, years) {
  return principal * (interestRate/12) * Math.pow(1 + (interestRate/12), (years*12))/(Math.pow(1 + (interestRate/12), (years*12)) - 1);
}


// function mortgageCalculator(principal, interestRate, years) {
//   return principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods)/(Math.pow(1 + monthlyInterestRate, periods) - 1);
// }



// console.log('Monthly Payment, from parameters')
// console.log(mortgageCalculator(200000, 0.05, 30));
// console.log('verifying change of 1st parameter works');
// console.log(mortgageCalculator(100000, 0.05, 30));
// console.log('verifying change of 2nd parameter works');
// console.log(mortgageCalculator(200000, 0.06, 30));
// console.log('verifying change of 3rd parameter works');
// console.log(mortgageCalculator(200000, 0.05, 20));

//Adding 4th parameter, creditScore 

console.log('Below is the change due to change in interestRate from creditScore');

function mortgageCalculator(principal, interestRate, years, creditScore) {
  // return principal * (interestRate/12) * Math.pow(1 + (interestRate/12), (years*12))/(Math.pow(1 + (interestRate/12), (years*12)) - 1);

    if (creditScore > 740) {
      interestRate = interestRate - (interestRate*0.005);
      console.log('This is the reduced interestRate');
      console.log(interestRate + " APR");
      return principal * (interestRate/12) * Math.pow(1 + (interestRate/12), (years*12))/(Math.pow(1 + (interestRate/12), (years*12)) - 1);

    } if (creditScore < 660) {
      interestRate = interestRate + (interestRate*0.005);
      console.log('This is the increased interestRate');
      console.log(interestRate + " APR");

      return principal * (interestRate/12) * Math.pow(1 + (interestRate/12), (years*12))/(Math.pow(1 + (interestRate/12), (years*12)) - 1);

    } if (creditScore >=660 || creditScore <=740) {
      interestRate = interestRate; 
      console.log('This is the unchanged interestRate between 660 and 740');
      console.log(interestRate + " APR");

      return principal * (interestRate/12) * Math.pow(1 + (interestRate/12), (years*12))/(Math.pow(1 + (interestRate/12), (years*12)) - 1);
    }
}

console.log('verifying that greater than 740 works');
console.log("$" + Math.round(mortgageCalculator(200000, 0.05, 30, 741)*100)/100 + " monthly payment");
console.log('verifying that less than 660 works');
console.log("$" + Math.round(mortgageCalculator(200000, 0.05, 30, 659)*100)/100 + " monthly payment");
console.log('verifying that between 660 and 740 works with edges of parameters');
console.log("$" + Math.round(mortgageCalculator(200000, 0.05, 30, 660)*100)/100 + " monthly payment");
console.log('This last one should be the same as the one above at the other edge of the parameter');
console.log("$" + Math.round(mortgageCalculator(200000, 0.05, 30, 740)*100)/100 + " monthly payment");


function variableInterestRate(principal, interestRate, years) {
      interestRate = interestRate - 0.02;
    
    for ( let i = 0; i < 11; i++ ) {
      // console.log("InterestRate before " + interestRate);
      let payment = principal * (interestRate/12) * Math.pow(1 + (interestRate/12), (years*12))/(Math.pow(1 + (interestRate/12), (years*12)) - 1);
      console.log(name + ", with an interest rate of " + Math.round(interestRate*1000)/10 + "%, your monthly payment is $" + Math.round(payment));
      interestRate = interestRate + 0.005;
      // console.log("InterestRate after " + interestRate);
    }
} 

variableInterestRate(200000, 0.05,30);
variableInterestRate(300000, 0.03, 20);
