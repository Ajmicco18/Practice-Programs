//DOM = Document Object Model
/*
    -document.getElementsByTagName()
    -doucment.getElementByID()
    -document.getElementsByClassName()
    -document.querySelector(Any HTML element)
    -document.querySelectorAll
    -html.innerHTML = "" changes content inside HTML  
*/

var pTags = document.getElementsByTagName('p')

var myList = ['apples', 'oranges', 'bananas'];


for (var i = 0; i < myList.length; i++) {
    console.log("You have " + myList[i] + " in your basket.");
}