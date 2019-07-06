var time = document.getElementsByTagName('time')[0],
    seconds = 0, minutes = 0, hours = 0;


function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    time.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);



}
let footerTimer = setInterval(add, 1000);

document.getElementById('footer-timer').addEventListener("mouseover", stopTimer);
document.getElementById('footer-timer').addEventListener("mouseleave", function(){
    footerTimer = setInterval(add, 1000);
});
function stopTimer() {
    clearInterval(footerTimer);
};
document.addEventListener("keydown", function(event){
    if (event.which == 27) {
        seconds = -1,
            minutes = 0,
            hours = 0;
        add('00', '00', '00');
    }

});