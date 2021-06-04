

// The function below is named "tests" and has 2 parameters(arguments) "test1" and "test2".

function tests(test1,test2)
{
// Below is the condition to be satisfied if the function is to execute.

let greater = test2>test1?test1:test2

// If the condition above is satisfied, then the variable name "greater" will be returned as seen below.
return greater

}

// The function below is named "coursework" with the parameter "cswork"
 function coursework(cswork)
 {
 
 // The function named "tests" with its arguments is nested in the condition below of the function definiton of the function named "coursework"
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 // 
 
return coursework }
 // The function definition above has been having a missing closing brace, which I have inserted on line 26
 

// This function below is named "avg" with the parameter "a"
function avg(a)
{

// The function named "coursework" with its argument is nested in the condition below of the function definiton of the function named "avg"
let avg =coursework(90)/a

// Below is the value to be returned if the above condition is satisfied.
return avg

}

// This function below is named "crsmark" with "a" as the argument.
function crsmark(a)
{
// The function named "avg" with its argument is nested in the condition below of the function definiton of the function named "crsmark"
let exm = avg(2)*(a/100)
// Below is the value to be returned after the execution of the statement above.
 return exm
}

// The function below is named "exam" with the argument "a"

function exam(a)
{

let fexam = (60/100)*a

// Below is the value to returned after execution of the above statement.
return fexam

}

// The fuction below is named "fnal", but has no parameter(s).

function fnal()
{

// Two functions with their arguments are nested in the statement below, which is defining the function named "fnal()".

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

// The static function defined above is now invoked below to produce the final result of this program.

fnal()


/** CONCLUSION: Initially, the file has not been running because of a missing closing brace in the function 
 definition of the function named "coursework(cswrk)". I have inserted the missing brace on line 26. 

 The file is tabulating the total coursework marks attained using the "coursework(cswrk)" function,
  and the final exam mark using the "fnal()" function.

**/