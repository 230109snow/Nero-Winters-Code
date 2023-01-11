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

5 % 3 //<--- IMPORTANT 
//also look for the remainder, 9 / 3 will have no remainder and so on and so on
//end of test area



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
