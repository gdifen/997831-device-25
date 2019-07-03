var link = document.querySelector(".write-us");
var popup = document.querySelector(".contacts-window");
var closeMap = document.querySelector(".close-map");
var closeWindow = document.querySelector(".close-window");
var map = document.querySelector(".contacts-map");
var popupMap = document.querySelector(".popup-map");
var form = document.querySelector(".modal-form");
var login = document.querySelector("[name=username]");
var email = document.querySelector("[name=email]");
var storage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("wow-pop-up");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

closeWindow.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("wow-pop-up");
    popup.classList.remove("modal-error");
});

map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("wow-pop-up");

});
closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("wow-pop-up");
});
form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});