// Using function parameters, create a javascript program that can calculate someone's Net Salary 
// where NSSF is 0.11%, PAYE is 30%. Use aleast three functions.

// This function called nssf with one parameter, grossPay  calculates NSSF from gross salary.
function nssf(grossPay) {
    let nssf = 0.11 * grossPay;
    // returns the amount of NSSF
    return nssf;
}

// This function called paye with one parameter, grossPay  calculates PAYE from gross salary.
function paye(grossPay) {
    let paye = 0.3 * grossPay;
    // returns the amount of PAYE
    return paye;
}

// This function called netPay with one parameter, grossPay  calculates Net Pay using gross salary, NSSF and PAYE.
function netPay(grossPay) {
    let netPay = grossPay - nssf(grossPay) - paye(grossPay);
    // returns the amount of Net Pay
    return netPay;
}

// Prints to the terminal the amount of Net Pay one is supposed to receive.
console.log(netPay(25000000))