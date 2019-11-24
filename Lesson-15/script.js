var addRowCell = document.getElementById('add');

addRowCell.addEventListener('click', addRow);

function addRow() {
    var trFirst = document.getElementsByTagName('tr')[0];
    trFirst.insertAdjacentHTML('beforebegin', '<tr><td></td><td></td><td></td></tr>');
}

var tbody = document.getElementsByTagName('tbody')[0];

tbody.onclick = function(event) {
    var target = event.target;

    if (target.tagName !='TD' || target === addRowCell) return;
    createRemoveInput(target);
};

function createRemoveInput(td) {
    var input = document.createElement('input');

    if (td.innerHTML) {
        input.value = td.innerHTML;
        td.innerHTML = '';
    }
    td.appendChild(input);
    input.focus();

    input.addEventListener('blur', function() {
        input.parentElement.innerHTML = input.value;
        input.remove();
    });

    input.addEventListener('keypress', function(event) {
        (event.keyCode === 13) && input.blur();
    })
}