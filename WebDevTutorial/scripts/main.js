//DOM = Document Object Model
/*
    -document.getElementsByTagName()
    -doucment.getElementByID()
    -document.getElementsByClassName()
    -document.querySelector(Any HTML element)
    -document.querySelectorAll
    -html.innerHTML = "" changes content inside HTML  
*/


var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addDifference = document.getElementById("difference");

var addOne = document.getElementById("add-one");
var addTwo = document.getElementById("add-two");
var addSum = document.getElementById("sum")

var mOne = document.getElementById("mult-one");
var mTwo = document.getElementById("mult-two");
var addProduct = document.getElementById("product");

var bTags = document.getElementById('change');

numOne.addEventListener("input", subtract);
numTwo.addEventListener("input", subtract);

addOne.addEventListener("input", add);
addTwo.addEventListener("input", add);

mOne.addEventListener("input", multiply);
mTwo.addEventListener("input", multiply);

function subtract() {

    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addDifference.innerHTML = "The difference is: " + (one - two);
}

function add() {
    var oneAdd = parseFloat(addOne.value) || 0;
    var twoAdd = parseFloat(addTwo.value) || 0;
    addSum.innerHTML = "The sum is: " + (oneAdd + twoAdd);
}

function multiply() {
    var oneMult = parseFloat(mOne.value) || 0;
    var twoMult = parseFloat(mTwo.value) || 0;
    addProduct.innerHTML = "The product is: " + (oneMult * twoMult);
}