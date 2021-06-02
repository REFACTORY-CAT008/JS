// test1 and test2 are called parameters and they have been defined

function tests(test1,test2)
{
// code to be executed
let greater = test2>test1?test2:test1;
if(text2 > test1){
    let greater = test2
} 
else{
    let greater = test1
}
// the function returns test2
return greater;

}

// a function called coursework with cswork as parameter has been defined
 function coursework(cswork)
 {
 
 // code to be executed
 let coursework = cswork + tests(80,80)
 
 // Print coursework in the consoleg
 console.log(coursework)
 
 
 // the function returns coursework
return coursework
 
 

 }
// A function called avg with a parameter a has been defined
function avg(a)
{

// Assign division of coursework(90),a to avg
let avg =coursework(90)/a

//. the function returns avg
return avg

}

// A function called crsmark with a as a parameter has been defined
function crsmark(a)
{
// Assign multiplication of avg(2),(a/100) to exm
let exm = avg(2)*(a/100)
//`the function returns exm
 return exm
}

// A function called exam with a as a parameter has been defined

function exam(a)
{
// Assign multiplication of (60/100),a to fexam
let fexam = (60/100)*a

// the function returns fexam
return fexam

}

// A function called fnal has no parameters and it has beed defined

function fnal()
{

// Assign sum of exam(75),crsmark(40) to fmark

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
function names(test){
    console.log("Hello, "+test)
}
