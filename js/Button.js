var green = document.querySelector('.button-green');
var red = document.querySelector('.button-red');
var blue = document.querySelector('.button-blue');


green.addEventListener("click", function(){
    if(this.style.backgroundColor == '')
        this.style.backgroundColor = 'white';
    this.style.backgroundColor = (this.style.backgroundColor == 'green') ? 'white' : 'green';
})





red.addEventListener("click", function(){
    if(this.style.backgroundColor == '')
        this.style.backgroundColor = 'white';
    this.style.backgroundColor = (this.style.backgroundColor == 'red') ? 'white' : 'red';
})






blue.addEventListener("click", function(){
    if(this.style.backgroundColor == '')
        this.style.backgroundColor = 'white';
    this.style.backgroundColor = (this.style.backgroundColor == 'blue') ? 'white': 'blue';
})