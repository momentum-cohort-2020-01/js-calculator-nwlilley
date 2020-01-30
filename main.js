function buttonPress(buttonMessage) {
    screen.innerHTML = buttonMessage;
}

let screen = document.querySelector(".screen")


// let clearButton = document.querySelector(".clear")
// clearButton.addEventListener("click",  
// })


let clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", function () {
    screen.innerHTML = "<p></p>";
})

let sevenButton = document.querySelector(".seven")
sevenButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("7");
    screen.append(numberEntry);
});

let eightButton = document.querySelector(".eight")
eightButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("8");
    screen.append(numberEntry);
});

let nineButton = document.querySelector(".nine")
nineButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("9");
    screen.append(numberEntry);
});


let divideButton = document.querySelector(".divide")
divideButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("/");
    screen.append(numberEntry);
});


let fourButton = document.querySelector(".four")
fourButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("4");
    screen.append(numberEntry);
});


let fiveButton = document.querySelector(".five")
fiveButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("5");
    screen.append(numberEntry);
});


let sixButton = document.querySelector(".six")
sixButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("6");
    screen.append(numberEntry);
});


let multiplyButton = document.querySelector(".multiply")
multiplyButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("*");
    screen.append(numberEntry);
});

let oneButton = document.querySelector(".one")
oneButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("1");
    screen.append(numberEntry);
});

let twoButton = document.querySelector(".two")
twoButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("2");
    screen.append(numberEntry);
});

let threeButton = document.querySelector(".three")
threeButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("3");
    screen.append(numberEntry);
});

let minusButton = document.querySelector(".minus")
minusButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("-");
    screen.append(numberEntry);
});

let zeroButton = document.querySelector(".zero")
zeroButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("0");
    screen.append(numberEntry);
});

let pointButton = document.querySelector(".point")
pointButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode(".");
    screen.append(numberEntry);
});

//EQUALS BUTTON
let equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", function() {
    let toEvaluate = screen.innerText;
    evaluation = eval(toEvaluate);
    screen.innerHTML = evaluation;

});

let plusButton = document.querySelector(".plus")
plusButton.addEventListener("click", function() {
    let numberEntry = document.createTextNode("+");
    screen.append(numberEntry);
});


