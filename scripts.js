window.onscroll = function() {myFunction()};//An immediately invoked function.
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;//navbar.offsetTop is a read-only property that returns the distance of the current element relative to the top of the parent node. 
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
