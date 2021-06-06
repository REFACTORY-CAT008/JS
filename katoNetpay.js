//Define a function tax with parameters.
function tax(paye,nssf){
//Declare a variable totalTax and assign the value of the sum of paye and nssf.
    let totalTax= paye + nssf
//Expose the value of totalTax.   
    return totalTax
}
//Define a function net with a parameter.
function net(salary){
//Declare a variable netSalary and assign it the values.
    let netSalary= salary -(salary*tax(0.3,0.11))
    console.log(netSalary)
}
//Invoke net.
net(100000)

