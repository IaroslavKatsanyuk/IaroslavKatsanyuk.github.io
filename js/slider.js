let dots = document.getElementsByClassName("dots-item"),
    dotsArea = document.getElementsByClassName("dots-block")[0],
    prewBtn = document.getElementById("left-button"),
    nextBtn = document.getElementById("right-button"),
    slides = document.getElementsByClassName("slides-item"),
    tab = document.getElementById('slides'),
    timer,
    go = true,
    slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    }else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}
function plusSliders(n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n);
}

prewBtn.onclick = function (){
    plusSliders(-1);
    clearTimeout(timer);
    auteSlider ();
}
var next = nextBtn.onclick = function (){
    plusSliders(1);
    clearTimeout(timer);
    auteSlider ();
}
function auteSlider (){
    timer = setTimeout(next, 3000);
}
tab.onmouseover = function(){
    go = false;
    clearTimeout(timer);
}
tab.onmouseout = function(){
    go = true;
    auteSlider();
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]){
            currentSlide(i);
            clearTimeout(timer);
            auteSlider ();
        }
    }
}
auteSlider ();