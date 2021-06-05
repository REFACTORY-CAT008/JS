//Define a function 'tests' with parameters.

function tests (test1, test2){

    //Declare variable greater and assign it a value test1 if test2>test1 else run test2 if the condition is false.
    
    let greater= test2>test1?test1: test2
    
    // Expose the value of greater to be used outside function.
    
    return greater}

    
    //Define a function coursework  with a parameter 
    
    function coursework (cswork)
    {
    // Declare a variable coursework and assign it the sum of parameter 'cswork' and function 'tests'.
    
    let coursework = cswork+tests(80,80)
    console.log(coursework)
    //Expected value 'cswork+ test2'.
    
    return coursework
    // Expose value of variable coursework.
    }
    
    //Define function avg with a parameter.
    
    function avg(a){
    
    //Declare variable avg to be the value of function coursework(90) divided by 'a'.
    
    let avg = coursework (90)/a
    
    // Function terminated.
    return  avg}
    
    // Define function crsmark with parameter.
    
     function crsmark(a){
    
    //Declare variable exm and assign it the product of function avg(2) and value (a/100).
    
    let exm = avg(2)*(a/100)
    
    //Expose the value of variable exm
    return exm
    }
    // Define function exam with parameter.
    
    function exam(a){
    // Declare variable fexam and assign it the product of (60/100)*a.
    let fexam=(60/100)*a
    
    // Expose fexam
    return fexam
    }
    
    // Define  a static  function 'fnal' .
    
    function fnal( ){
    
    //Declare a variable fmark and assign it the value of the sum of the value of function exam(75) and function crsmark(40) .
    
    let fmark= exam(75)+crsmark(40)
    console.log(fmark)
    }
    // Invoke function 'fnal'.
    
    fnal( )
    
    /* This code is valid and would give you a result of 170 and 79*/
    