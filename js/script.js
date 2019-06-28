var link = document.querySelector(".write-us");
var popup = document.querySelector(".contacts-window");
var close = document.querySelector(".close");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("wow-pop-up");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("wow-pop-up");
});