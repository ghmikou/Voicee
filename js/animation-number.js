function cAnimate(id, start, end, frameDelay = 100, mul = 1.1) {
    var obj = document.getElementById(id);
    var increment = 2;
    var current = start;
    var timer = setInterval(function() {
        current += increment;
        increment *= mul;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        obj.innerHTML = Math.floor(current).toLocaleString() + " €";

    }, frameDelay);
}
window.onscroll = function() {myFunction()};
var counter = 0
function myFunction() {
  if ((document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) && counter < 1) {
    cAnimate("toto", 0, 199, 50);
    cAnimate("toto1", 0, 499, 50);
    cAnimate("toto2", 0, 1999, 50)
    counter += 1
  }
}

