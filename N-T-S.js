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



function fizzball() {
    let fbInputElem = document.getElementById("fb-input").value;
    console.log(document.getElementById("fb-input").value);
    let fbOutput = document.getElementById("fb-output");
    fbOutput.innerText = Boolean(fbInputElem == 3);
    
    
}