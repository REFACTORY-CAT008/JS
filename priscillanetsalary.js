
// A function called deductions with Salary as the parameter has been defined
function deductions (salary){
// a variable called nssf has been declared and assigned to the operator that multiplies salary with nssf
//a variable called paye has been declared and assigned to the operator that multiplies salary with paye
//a variable called total deductions has been declared and assigned to the operator that multiplies adds nssf to paye to get total deductions
    let nssf = (11 / 100) * salary;
    let paye = (30 / 100) * salary;
    let totalDeductions = nssf + paye;

    console.log(totalDeductions)
    return totalDeductions;
}

// A function called netSalary with Salary as the parameter has been defined
function netSalary(salary) {
    let netSalary = salary - deductions(5000000);

    console.log(netSalary);
}
//we invoke the function netSalary by passing a value to it 
netSalary(5000000)
/* when the program is run, it returns atotal tax of 205000and a net salaryof 295000*/


