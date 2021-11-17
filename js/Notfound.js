var t = 3;
setInterval("refer()", 1000);
function refer() {
    if (t == 0) {
        location = "../web/index.html";
    }
    document.getElementById('tipone').innerHTML = t;
    document.getElementById('tiptwo').innerHTML = t;
    t--;
}