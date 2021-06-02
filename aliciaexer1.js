//A function called tests with two parameters(test1 and test2) has been defined
function tests(test1, test2) {
    //A variable greater has been initialized which will be used to check which of the two variables is greater
    //A conditional statement has been set to return the parameter with the greatest value. 
    let greater = test2 > test1 ? test1 : test2
        //in order to make the variable greater accesible for other functions in the program when invoked,we have set it like this
    return greater
}

//A function called coursework with a parameter cswork has been defined
function coursework(cswork) {
    // A variable called coursework has been initialised and asigned to calculate the value of coursework
    //value of coursework is calculated by the summation of cswork value and the greatest value from tests
    let coursework = cswork + tests(80, 80)
        //This prints the value of coursework in the terminal
    console.log(coursework)
        //in order to make the variable coursework accesible for other functions in the program when invoked, we have set it like this        
    return coursework
}
//A function callled avg with a parameter a has been defined
function avg(a) {
    //A variable called avg has been initialised and assigned to calculate the avg value
    //avg value is calculated through division of coursework value by a                     
    let avg = coursework(90) / a
        //in order to make the variable avg accesible for other functions in the program , we have set it like this            
    return avg
}

//A function called crsmark with a parameter a has been defined
function crsmark(a) {
    //A variable called exm has been initialised and asigned to calculate the value of exm
    //exm value is calculated through the multiplication of the avg value with the percentage of a
    let exm = avg(2) * (a / 100)
        //in order to make the variable exm accesible for other functions in the program , we have set it like this         
    return exm
}
//A function called exam with a parameter a has been defined
function exam(a) {
    //A variable called fexam has been initialised and asigned to calculate the value of fexam
    //fexam value is calculated through multiplication of the percentage of 60 with a
    let fexam = (60 / 100) * a
        //in order to make the variable fexam accesible for other functions in the program , we have set it like this           
    return fexam

}

//A function called final has been defined
function fnal() {
    //A variable called fmark has been initialised and asigned to calculate the value of fmark
    //value of fmark is calculated by summing up the exam value and the crsmark value
    let fmark = exam(75) + crsmark(40)
        //This prints the value of fmark in the terminal
    console.log(fmark)

}
//this invokes the function final in the program
fnal()

/*
the program runs and returns 170 for the value of coursework and 79 for the fmark

there was no closing tag at the end of function coursework, i added it
*/