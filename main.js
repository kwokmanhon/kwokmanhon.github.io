window.onscroll = function() {scrollNav()};

let scroll = document.getElementById("top-navigation");
 
function scrollNav() {
    if (window.pageYOffset  > 50) {
        scroll.classList.remove("stickyExit")
        scroll.classList.add("stickyEnter");
    } else {
        scroll.classList.remove("stickyEnter");
        scroll.classList.add("stickyExit");
    }
}