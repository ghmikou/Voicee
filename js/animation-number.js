function cAnimate(id, start, end, frameDelay = 100, mul = 1.2) {
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

        obj.innerHTML = Math.floor(current).toLocaleString();

    }, frameDelay);
}

cAnimate("price-value", 1, 260000, 50);