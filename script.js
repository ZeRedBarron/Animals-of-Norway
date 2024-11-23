function ScrollImg(src, speed) {
    this.src = src;
    this.speed = speed;
    this.element = document.createElement("div");
    
    this.setup = function() {
        this.element.style.backgroundImage = "url(" + src + ")";
        this.element.style.backgroundPosition = "0px 0px";
    };
    
    this.scroll = function(e, s) {
        var e = typeof e === "undefined" ? this.element : e,
        s = typeof s === "undefined" ? this.speed : s;
        e.style.backgroundPosition = "0px " + ((e.getBoundingClientRect().top) * s) + "px";
    }
    
    this.scrollInit = function() {
        var scroll = this.scroll;
        var e = this.element;
        var s = speed;
        window.addEventListener("scroll", function() {
            scroll(e, s);
        });
    };
}

var img1 = document.getElementById("img1");

var scroll1 = new ScrollImg("https://www.kasandbox.org/programming-images/animals/butterfly.png", 0.5);
scroll1.setup();
img1.appendChild(scroll1.element);
scroll1.scroll();
scroll1.scrollInit();


var img2 = document.getElementById("img2");

var scroll2 = new ScrollImg("https://www.kasandbox.org/programming-images/animals/horse.png", 0.5);
scroll2.setup();
img2.appendChild(scroll2.element);
scroll2.scroll();
scroll2.scrollInit();


var img3 = document.getElementById("img3");

var scroll3 = new ScrollImg("https://www.kasandbox.org/programming-images/animals/snake_green-tree-boa.png", 0.5);
scroll3.setup();
img3.appendChild(scroll3.element);
scroll3.scroll();
scroll3.scrollInit();