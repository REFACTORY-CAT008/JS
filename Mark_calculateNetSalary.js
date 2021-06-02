//declare the function 'calculate_bonuses' and pass it a parameter 'x'
//parameter 'x' will be the performance
function calculate_bonuses(x) {
    // the product of the perfomance percentage and the value 1000000 will result into bonus 
    bonus = (x/100) * 1000000;
    //by evoking using return, the value of bonus will be accessed when called in another function
    return bonus
}
//declare the function 'calculate_grosspay' and pass it a parameter 'salary'
function calculate_grossPay (salary){
    //the value of gpay is obtained from the sum of salary and function calculate_bonuses
    gPay = salary + calculate_bonuses(85);
    //console.log will print the value of gross pay
    console.log(gPay)
     //by evoking using return, the value of gpay will be accessed when called in another function
    return gPay 
}
//declare the function 'calculate_incomeTax' and pass it a parameters 'NSSF' and 'PAYE'
function calculate_incomeTax(NSSF, PAYE) {
    //the value of taxes is obtained from the product of the sum of the parameters 'NSSF' and 'PAYE' and function calculate_grossPay
    taxes = (NSSF + PAYE) * calculate_grossPay(3000000);
    //by evoking using return, the value of taxes will be accessed when called in another function
     return taxes
}

//declare the function 'calculate_netSalary'
function calculate_netSalary () {
    //to obtain netPay subtract function calculate_incomeTax from function calculate_grossPay
    netPay = calculate_grossPay(3000000) - calculate_incomeTax((11/100), (30/100));
    return netPay
}
//console.log will print the value of net salary
console.log(calculate_netSalary())

