var checkList = document.getElementById("checklist");

var items = checkList.querySelectorAll("li");
var inputs = checkList.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeyPress);
}

function editItem() {
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeyPress(event) {
    if (event.which === 13) {
        updateItem.call(this);
    }
}