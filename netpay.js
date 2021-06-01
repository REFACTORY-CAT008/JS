
function bonuses(a) {
    bonus = (a/100) * 1000000;
    console.log(bonus)
    return bonus
}

function grossPay (slry){
    gPay = slry + bonuses(85);
    console.log(gPay)
    return gPay 
}

function incomeTax(NSSF, PAYE) {
    taxes = (NSSF + PAYE) * grossPay(3000000);
    console.log(taxes)
     return taxes
}


function netSalary () {
    netPay = grossPay(3000000) - incomeTax((11/100), (30/100));
    return netPay
}

console.log(netSalary())

