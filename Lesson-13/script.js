var button = document.getElementsByTagName('button')[0],
    inputs = document.getElementsByTagName('input'),
    inputX = document.getElementById('x'),
    inputY = document.getElementById('y');
    
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', changeButtonState, false);
}

function changeButtonState() {
    (inputX.value && inputY.value) ? button.removeAttribute('disabled') : button.setAttribute('disabled', true);
}

button.addEventListener('click', validateInput, false);

function validateInput(event) {
    event.preventDefault();

    if (document.getElementsByTagName('table')[0]) {
        document.getElementsByTagName('table')[0].remove();
    };

    var readyForTable = true;
    for (var i = 0; i < inputs.length; i++) {
        if (isNaN(inputs[i].value) || inputs[i].value < 1 || inputs[i].value > 10) {
            alert('Значение некорректно - введите число от 1 до 10');
            inputs[i].value = '';
            changeButtonState();
            readyForTable = false;
        } 
    }
    if(readyForTable) tableCreate();
}


function tableCreate() {
    var tbl = document.createElement('table');
    tbl.classList.add('table-style');

    for (var i = 0; i < inputY.value; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < inputX.value; j++) {
            var td = document.createElement('td');
            td.classList.add('td-size');
            tr.appendChild(td)

            if (i % 2 === j % 2) {
                td.classList.add('black');
            }
        }
        tbl.appendChild(tr);
    }
    document.body.appendChild(tbl)

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        changeButtonState();
    }
    changeCellColor();
}


function changeCellColor() {
    var tbl = document.getElementsByTagName('table')[0];

    if (tbl) {
        tbl.addEventListener('click', function() {
            var tdCollection = tbl.getElementsByTagName('td');

            for (var i = 0; i < tdCollection.length; i++) {
                tdCollection[i].classList.toggle('black');
            }             
        }, false);
    }
}