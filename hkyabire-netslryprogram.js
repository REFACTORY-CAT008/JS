
/* using functions and parameters, create a javascript program that can calculate someone'someones
net salary, where NSSF is 0.11 (11%) and PAYE is 0.30 (30%) */

var grosspay = 1000000 // for the actual program, I can set this to request "input"

function nssf(grosspay) // The function is named "nssf", with "grosspay" as the parameter because nssf is a %ge of grosspay
{
    let nssf = (11/100)*grosspay;  //This line expresses "nssf" as a %ge of the "grosspay"
    console.log(nssf)
    
    return nssf   // I have made this to be returned so it can be used in another function
}
//nssf(1000000)  I tried to call this function with the enclosed sample argument and it returns a result of 110000

function paye(grosspay) // // The function is named "paye", with "grosspay" as the parameter because "paye" is a %ge of grosspay
{
    let paye = (30/100)*grosspay;   // This line expresses "paye" as a percentage of the "grosspay"
    console.log(paye)
    
    return paye
 }

 //paye(1000000) Tried to call this function with the enclosed sample argument and it returns a result of 300000

function deductions(nssf, paye)      // I have named this function "deductions", and given it 2 parameters namely nssf and paye
{
    let deductions = nssf(1000000)+ paye(1000000);       // I have assigned arguments to these nested functions apye and nssf
    console.log(deductions)

    return deductions
}

function netslry()      //This is the last function definition that will help us get the final result
{
    let netslry = grosspay - deductions;
    console.log(netslry)

}

netslry()   // The last function is now invoked to be able to give the final result of the net salary
