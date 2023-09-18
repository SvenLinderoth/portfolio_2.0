
function init () {
    var explore_btn = document.getElementsByClassName('explore-btn');

    explore_btn[0].addEventListener("click", scrollDown);

    // var scroll_up = document.getElementsByClassName('back-up-btn');

    // scroll_up[0].addEventListener("click", scrollUp);

    notiCard();
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
// // void 
// function scrollUp(e) {
//     window.scrollTo({
//         top:  0,
//         left: 0,
//         behavior: "smooth",
//       });
//     return null;
// }
function notiCard() {
  const el = document.querySelector(".noti")
  const glowEl = document.querySelector(".notiglow")
  const borderEl = document.querySelector(".notiborderglow")

// if the pen is in thumbnail view, scale it up
if (location.pathname.match(/fullcpgrid/i) ? true : false) {
  document.documentElement.style.fontSize = "48px"
  document.querySelector(".note").style.display = "none"
}
let isHovering = false;
el.addEventListener("mousemove", (event) => {
  const rect = el.getBoundingClientRect()
  const localX = (event.clientX - rect.left) / rect.width
  const localY = (event.clientY - rect.top) / rect.height
  
  console.log(localX, localY)
  glowEl.style.left = localX * 100 + "%"
  glowEl.style.top = localY * 100 + "%"
  
  borderEl.style.left = localX * 100 + "%"
  borderEl.style.top = localY * 100 + "%"
  
  if (isHovering) {
    glowEl.style.transition = "inset 50ms linear, opacity 300ms ease";
    borderEl.style.transition = "inset 50ms linear, opacity 300ms ease"
  } else {
    glowEl.style.transition = "opacity 300ms ease"
    borderEl.style.transition = "opacity 300ms ease"
  }
  
  isHovering = false
});

el.addEventListener("mouseout", (event) => {
  isHovering = true;
})
}