let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.classList.remove("hidden");
    } else {
        navbar.style.top = "-80px";
        navbar.classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
};
