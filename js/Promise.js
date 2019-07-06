status_bar.onclick = function() {
    animate({
        duration: 3000,
        timing: function(timeFraction) {
            return timeFraction;
        },
        draw: function(progress) {
            elem.style.width = progress * 100 + '%';
        }
    });
    status_bar.onclick = setTimeout (function () {
        var buttonPromiseOne = document.getElementById('button_promise_one');
        var buttonPromiseTwo = document.getElementById('button_promise_two');
        buttonPromiseOne.disabled = true;
        buttonPromiseTwo.disabled = true;
    }, 10);
    setTimeout (function () {
        var buttonPromiseOne = document.getElementById('button_promise_one');
        var buttonPromiseTwo = document.getElementById('button_promise_two');
        buttonPromiseOne.disabled = false;
        buttonPromiseTwo.disabled = false;
    }, 3000);
};

function animate(options) {

    var start = performance.now();

    requestAnimationFrame(function animate(time) {

        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
// document.getElementById('button_promise_two').onclick = function () {
// function blockPromise1 (){
//     document.querySelector('.block_promise1').classList.add('block_promise1_active');
// };
// function blockPromise2 (){
//         document.querySelector('.block_promise2').classList.add('block_promise2_active');
//     };
// function blockPromise3 (){
//         document.querySelector('.block_promise3').classList.add('block_promise3_active');
//     };
//     blockPromise1 ();
//     blockPromise2 ();
//     blockPromise3 ();
//     if () {
//
//     }
// }


document.getElementById('button_promise_one').onclick = function () {
    function () {
        var elems = document.querySelectorAll('.block_promise1');
        elems.style.opacity = '0';
        elems.style.height = "0";
        elems.style.transition = '2s';
    }
}