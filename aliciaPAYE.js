// defined a function called tax which takes on the parameter salary 
//declared a variable called nssfValue and assigned it that operation which multipies salary with the nssf Rate that was given
//declared a variable called payeValue and assigned it that operation which multipies salary with the paye Rate
//declared a variable called totaltax and assigned it that operation which adds the nssfValue tothe payevalue to get the total sum of taxes
//to expose the totaltax to the program, i used the return keyword

function tax(salary) {
    let nssfvalue = (11 / 100) * salary;
    let payevalue = (30 / 100) * salary;
    let totaltax = nssfvalue + payevalue;

    console.log(totaltax)
    return totaltax;

}

//to get the netsalary, i defined a function called netSalary that takes on a parameter salary
//declared a variable called netSalary and assigned it that operation which subtracts totaltax from salary
//we invoked tax by giving it a numerical value

function netSalary(salary) {
    let netSalary = salary - tax(1000000);

    console.log(netSalary);
}
//we invoke the function netSalary by passing a value to it 
netSalary(1000000)

/* when the program is run, it returns atotal tax of 410000and a net salaryof 590000*/