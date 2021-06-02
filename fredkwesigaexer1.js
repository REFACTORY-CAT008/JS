

//Declare the function as 'tests' and pass the parameters 'test1 and test2' to the function.

function tests(test1,test2)
{
//This defines the value of 'greater' as 'test 1'(true) if the 'test2' value is greater than 'test1' value, else return 'test2'(false)
//condition statement?true:false
let greater = test2>test1?test1:test2
//evokes the value of "greater" such that it is accessed by external code blocks.
return greater

}

//Declare the function as 'coursework' and pass the parameter 'cswork' to the function
 function coursework(cswork)
 {
 
 //This defines the "coursework" value and add the function 'cswork' and to the subtraction arguments of test 'value'
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //logs the value of 'coursework'

return coursework
 //returns the value of 'coursework' and makes the 'coursework' value available to outer functions.


///Declare the function as 'avg' and pass one parameter 'a' to the function.
function avg(a) 
{

// The value of 'avg'is obtained by dividing the result from the 'coursework' function by the 'a' value.
let avg =coursework(90)/a 

//Evokes the value of 'avg' and makes the 'avg' value available to outer functions.
return avg

}

//Declare the function as 'crsmark' and pass the parameter 'a' to the function.
function crsmark(a)
{
//Return a value in 'exm' that's a result of the multiplication of the 'avg' function and the percentage of the 'a' value passed in this function.
let exm = avg(2)*(a/100) 
//Evokes the value of 'exm' and makes the 'exm' value available to outer functions.
 return exm
}

//Declare the function as 'exam' and pass the parameter 'a' to the function.

function exam(a)
{

// The value of 'fexam' is obtained by multiplying 60% with parameter 'a'  
let fexam = (60/100)*a 

//Evokes the value of 'fexam' and makes the 'fexam' value available to outer functions.
return fexam

}

//Declare the function as 'fnal' and pass no parameter to the function.

function fnal()
{

//The value in 'fmark' is aa a result of adding the 'exam' function result and the 'crsmark' function result.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//This calls the final function.

fnal()


/**
 This code snippet will not run because the 'coursework' function has no closing braces'}' 
This causes a syntax error. The code is grading (students) or giving marks.
*/
