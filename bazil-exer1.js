// Created a function called tests with two parameters; test1 and test2
function tests(test1, test2)
{
// Declared a variable called greater and initialized it to the result of the tenary operator applied on the two parameters; test1 and test2
let greater = test2>test1?test1:test2;

// The function tests returns the value of the variable greater.
return greater

}

// Created a function called coursework with one parameter cswork
 function coursework(cswork)
 {
 
 // Declared a variable called coursework and initialized it to result of the parameter cswork plus the result of the tests function with two arguments; 80 and 80.
 let coursework = cswork + tests(80,80)
 
//  Prints the value of the variable coursework to the terminal
 console.log(coursework)
 
// The function coursework returns the value of the variable coursework.
return coursework

 // Added a closing curly bracket to the function called coursework
 }

// Created a function called avg with one parameter a
function avg(a)
{

 // Declared a variable called avg and initialized it to the result of the function coursework with an argument of 90 divide by the parameter a.
let avg = coursework(90)/a

// The function avg returns the value of the variable avg.
return avg

}

// Created a function called crsmark with one parameter a
function crsmark(a)
{

 // Declared a variable called exm and initialized it to the result of the function avg with an argument of 2 multiplied  the parameter a divide by 100.
 let exm = avg(2)*(a/100)

// The function crsmark returns the value of the variable exm.
return exm
}

// Created a function called exam with one parameter a
function exam(a)
{

// Declared a variable called fexam and initialized it to 60 divide by 100 mulitplied by variable a.
let fexam = (60/100)*a

// The function exam returns the value of the variable fexam.
return fexam

}

// Created a function called fnal() without a parameter
function fnal()
{

// Declared a variable called fmark and initialized it to the result of the function exam with an argument 75 plus the function crsmark with an argument 40.
let fmark = exam(75)+crsmark(40)

//  Prints the value of the variable fmark to the terminal
console.log(fmark)

}

// Called the function fnal() which prints the value of the fmark to the terminal
fnal()


/**
    The above code uses the marks for test one, test two, coursework and final exam to calculate the final mark of a student.
**/