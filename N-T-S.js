let num = 0;
function Increase() {
    const CounterElem = document.getElementById("Counter");
    CounterElem.innerText = ++num;
}
function Subtract() {
    const CounterElem = document.getElementById("Counter");
    CounterElem.innerText = --num;
}
function Reset() {
    const CounterElem = document.getElementById("Counter");
    num = 0;
    CounterElem.innerText = 0;
}


//Test area


//end of test area

//fix code below
function fizzball() {
    let fbInputElem = document.getElementById("fb-input").value;
    console.log(document.getElementById("fb-input").value);
    let fbOutput = document.getElementById("fb-output");
    if (fbInputElem % 3 == 0 ) {
    fbOutput.innerText = "Fizz";
    }
    if (fbInputElem % 5 == 0) {
        fbOutput.innerText = "Buzz";
    }
    if (fbInputElem % 15 == 0) {
        fbOutput.innerText = "Fizzbuzz";
    }
    else if (fbInputElem % 3 != 0 && fbInputElem % 5 != 0 && fbInputElem % 15 != 0 )
        fbOutput.innerText = fbInputElem;

 }
  let firstNum = 0;
  let secondNum = 1;
 function Operation(input) {
        Variable = input;
        document.getElementById("cal-output").innerHTML = 
        document.getElementById("cal-output").innerHTML + input;
        
 }
 function calculator () {
    if (document.querySelector("cpc")) {
        document.getElementById("cal-output").innerHTML = 
        parseInt(document.getElementById("cal-output").innerHTML)
        + parseInt(Variable);
    }
    else if (document.getElementById("c-"))
        document.getElementById("cal-output").innerHTML = 
        parseInt(document.getElementById("cal-output").innerHTML)
        - parseInt(Variable);
 }
 function reset(input) {
    document.getElementById("cal-output").innerHTML = "";
 }
 
 