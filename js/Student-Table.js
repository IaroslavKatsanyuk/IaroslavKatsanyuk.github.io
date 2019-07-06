function addRow() {
    var rIndex;
    var table = document.getElementById('student-lister');
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var expiration = document.getElementById('expiration').value;
    var save = document.getElementById('save');
    var index;
    var tr = document.getElementsByTagName('tr');
    var newRow = table.insertRow(table.rows.length);


    for (index = 0; index < tr.length - 1; index++) ;

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);
    var cel7 = newRow.insertCell(6);

    cel1.innerHTML = index;
    cel2.innerHTML = fname;
    cel3.innerHTML = lname;
    cel4.innerHTML = age;
    cel5.innerHTML = expiration;
    cel6.innerHTML = "<img class='edit' src='image/edit.png' style='height:60px; width:60px;'>";
    cel7.innerHTML = "<img class='delete' src='image/black.png' style='height:60px; width:60px;'>";
    var inputs = document.querySelectorAll('input[type=text]');

    for (var i = 0;  i < inputs.length; i++) {
        inputs[i].value = '';
    };

    var delElem = document.querySelectorAll('.delete');
    for (var i = 0; i < delElem.length; i++) {
        delElem[i].addEventListener('click', function(event){
            deleElemntTable(event);
        });
    }
    var editElem = document.querySelectorAll('.edit');
    for (var i = 0; i < editElem.length; i++) {
        editElem[i].addEventListener('click', function(event){
            editElement(event);
        });
    }
    function deleElemntTable(event) {
        let el = event.target.parentElement.parentElement,
            localStorEle = event.target.parentElement.parentElement.childNodes[0].innerHTML;

        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
        localStorage.removeItem(localStorEle-1);
    }
    function editElement(event) {
        for(var i = 1; i < table.rows.length; i++)
        {
            table.rows[i].onclick = function() {
                rIndex = this.rowIndex;
                document.getElementById("fname").value = this.cells[1].innerHTML;
                document.getElementById("lname").value = this.cells[2].innerHTML;
                document.getElementById("age").value = this.cells[3].innerHTML;
                document.getElementById("expiration").value = this.cells[4].innerHTML;
                check();
            };
        }
        deleElemntTable(event);
    }
    check();
    console.log (fname.length);
}
document.getElementById("clearButton").onclick = function(e){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("filter").value = "";
    document.getElementById("expiration").value = "";
    check();
}

function check() {
    var fname = document.getElementById('fname');
    var save = document.getElementById('save');
    var lname = document.getElementById('lname');
    var age = document.getElementById('age');
    var expiration = document.getElementById('expiration');
    fname.value !== '' ? save.disabled = false : save.disabled = true;
    lname.value !== '' ? save.disabled = false : save.disabled = true;
    age.value !== '' ? save.disabled = false : save.disabled = true;
    expiration.value !== '' ? save.disabled = false : save.disabled = true;
}
check();