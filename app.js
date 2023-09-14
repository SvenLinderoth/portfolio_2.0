
function init () {
    var explore_btn = document.getElementsByClassName('explore-btn');

    explore_btn[0].addEventListener("click", scrollDown);

    var scroll_up = document.getElementsByClassName('back-up-btn');

    scroll_up[0].addEventListener("click", scrollUp);
}
window.addEventListener('load', init);

// void 
function scrollDown(e) {
    window.scrollTo({
        top:  700,
        left: 0,
        behavior: "smooth",
      });
    return null;
}
// void 
function scrollUp(e) {
    window.scrollTo({
        top:  0,
        left: 0,
        behavior: "smooth",
      });
    return null;
}
