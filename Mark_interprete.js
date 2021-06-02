// //declare the function 'tests' and pass it a parameters 'test1 and test2'
function tests(test1, test2) {
    //the statement means if test2 is greater than test1 return greater, otherwise return else
    let greater = test2 > test1 ? test1 : test2
    return greater
    //by invoking using keyword return, the value of the variable will be accessed when called
}


//this function would return an error because function is not closed, but i have corrected it
//declare the function 'coursework' and pass it a parameter 'cswork'
function coursework(cswork) {
    //given an argument for parameter cswork, it will give the sum of cswork and result from function "tests"
    let coursework = cswork + tests(80, 80)
    //console.log will print the value of coursework
    console.log(coursework)
    //by invoking using keyword return, the value of the variable will be accessed when called
    return coursework

}

//declare the function 'avg' and pass it a parameter 'a'
function avg(a) {
    //the value of variable avg will be obtained by dividing the result of function coursework by parameter a
    let avg = coursework(90) / a

    return avg
    //by invoking using keyword return, the value of the variable will be accessed when called
}

//declare the function 'crsmark' and pass it a parameter 'a'
function crsmark(a) {
    //the product of function avg and the percentage mark will give the value of exm
    let exm = avg(2) * (a / 100)
    return exm
    //by invoking using keyword return, the value of the variable 'crsmark' will be accessed when called
}


//declare the function 'exam' and pass it a parameter 'a'
function exam(a) {
    //the value of of fexam will be obtained from the product of the percentage and parameter 'a'
    let fexam = (60 / 100) * a

    return fexam

    //by invoking using keyword return, the value of the variable will be accessed when called
}

//declare the function 'fnal'
function fnal() {
    //the sum of the results from functions exam and crsmark will give the result
    let fmark = exam(75) + crsmark(40)
       //console.log will print the value of fmark
    console.log(fmark)

}

fnal()
