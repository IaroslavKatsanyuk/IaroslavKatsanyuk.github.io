var timerId;// Время
var clock = document.getElementById('clock');
var date = new Date();
function update() {

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    var minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    var seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    setInterval(update, 1000);
    update();
}
var dateString = date.toDateString();
clock.children[3].innerHTML = dateString;




window.addEventListener('resize',dimensions);//Размер экрана

function dimensions(){
    let intervalId= setTimeout (function(){
        document.querySelector('.w').innerText = document.documentElement.clientWidth;
        document.querySelector('.h').innerText = document.documentElement.clientHeight;
    },2000)
}
dimensions();
clockStart();


var paintTab = document.getElementById("picture-table");
button.onclick = function (){
    let rows = +document.getElementById('rows').value,
        columns = +document.getElementById('columns').value;

    if (rows <= 10 && columns <= 10 && rows > 0 && columns > 0) {
        createTable(rows, columns);
        document.querySelector('.messageTab').innerHTML = '';
    } else {
        document.querySelector('.messageTab').innerHTML = 'Таблица должна состоять от 1 до 10 солбцов и от 1 до 10 колонок!';
    }
};

function createTable (rows, columns){
    let table = document.createElement('table');
    let firstTable = document.querySelector("table");
    let index = 0;

    for (var rowsIndex = 0; rowsIndex < rows; rowsIndex++){
        var tr = document.createElement('tr');

        for (var columnsIndex = 0; columnsIndex < columns; columnsIndex++){
            var td = document.createElement ('td');
            tr.appendChild (td).setAttribute('index', index);
            index++;
        }
        table.appendChild (tr);
    }
    if (firstTable == null) {
        return paintTab.appendChild(table);
    } else {
        var newTable = paintTab.appendChild(table);
        return paintTab.replaceChild(newTable, firstTable);
    }
};

paintTab.onmouseover = function (event) {
    var tableID = event.target.getAttribute('index');
    if (paintTab.children[0] !== event.target) {
        event.target.innerHTML = tableID;
    }
};

