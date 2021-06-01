
function calculate_bonuses(a) {
    bonus = (a/100) * 1000000;
    console.log(bonus)
    return bonus
}

function calculate_grossPay (slry){
    gPay = slry + bonuses(85);
    console.log(gPay)
    return gPay 
}

function calculate_incomeTax(NSSF, PAYE) {
    taxes = (NSSF + PAYE) * grossPay(3000000);
    console.log(taxes)
     return taxes
}


function calculate_netSalary () {
    netPay = grossPay(3000000) - incomeTax((11/100), (30/100));
    return netPay
}

console.log(calculate_netSalary())

