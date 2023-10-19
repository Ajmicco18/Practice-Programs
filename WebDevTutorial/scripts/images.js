var bagel = document.getElementById("bagel");
var donut = document.getElementById("donut");
var coffee = document.getElementById("coffee");

bagel.addEventListener("click", picLink);
donut.addEventListener("click", picLink);
coffee.addEventListener("click", picLink);


function picLink() {
    var allImages = document.querySelectorAll("img");

    for (var i = 0; i < allImages.length; i++) {
        allImages[i].className = "hide";
    }

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);

    if (pic.className === "hide") {
        pic.className = "";
    } else {
        pic.className = "hide";
    }

}


