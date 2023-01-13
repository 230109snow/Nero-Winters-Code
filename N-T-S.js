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
 function Plus(input) {
    additsh()
    Operation(input)
 }function Subtrish(input) {
    Subtract()
    Operation(input)
 }
 function Operation(input) {
        Variable = input;
        document.getElementById("cal-output").innerHTML = 
        document.getElementById("cal-output").innerHTML + input;
        
 }
 
 function additsh() {
    globalThis.x = 0; 
}
 
function Subtract() {
    globalThis.x = 1;
}
 function calculator () {
    
    if (x == 0) {
        document.getElementById("cal-output").innerHTML = 
        parseInt(document.getElementById("cal-output").innerHTML)
        + parseInt(Variable);
    }
    else if (document.querySelector(".spc"))
        document.getElementById("cal-output").innerHTML = 
        parseInt(document.getElementById("cal-output").innerHTML)
        - parseInt(Variable);
 }
 function reset() {
    document.getElementById("cal-output").innerHTML = "";
 }
 
const imgTag = document.createElement('img')
function testfetch() {

fetch('https://api.thecatapi.com/v1/images/search').then((res) => 
res.json()).then
((data) => {
   
    for(let i = 0; i < data.length; i++) {
       
        imgTag.src = data[i].url;
        imgTag.width = 400;
        imgTag.height = 300;
        document.getElementById("img-test").appendChild(imgTag);
    }
    })
}
function awayWithTheCat() {
    document.getElementById("img-test").removeChild(imgTag);
    }
    



// https://random-word-api.herokuapp.com/home
