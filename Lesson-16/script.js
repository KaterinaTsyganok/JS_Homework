var button = document.getElementById('button'),
    usersData,
    markersBlock,
    infoBlock;

if (localStorage.users) {
    usersData = JSON.parse(localStorage.getItem('users')).data;
    createMarkersBlock(usersData);
} else {
    button.addEventListener('click', getData);
}

function getData() {
    var xhr = new XMLHttpRequest();
       
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    //xhr.open('GET', 'https://reqres.in/api2/users?page=2', true); // ТУТ ОШИБКА ПОЛУЧЕНИЯ ДАННЫХ
    xhr.send();
    
    xhr.onload = function() {
        var statusType = +String(this.status)[0];

        if (statusType === 2) {
            localStorage.setItem('users', this.response);
            usersData = JSON.parse(this.response).data;
            createMarkersBlock(usersData);
        } else {
            showError(this.status);
        }
    };
}

function createMarkersBlock(usersData) {
    document.getElementsByClassName('wrapper')[0].innerHTML = '<div class="markers"></div>';
    markersBlock = document.getElementsByClassName('markers')[0];
    markersBlock.insertAdjacentHTML('afterend', '<div class="info"></div>');
    infoBlock = document.getElementsByClassName('info')[0];

    for (var i = 0; i < usersData.length; i++) {
        markersBlock.innerHTML += '<div class = "markers-item" id="' + i + '"> User ' + (i+1) + '</div>';
    }

    highlight(markersBlock.firstElementChild);
    
    markersBlock.addEventListener('click', function(event) {
        var target = event.target;
        if (target.className != 'markers-item') return;

        highlight(target);
    })

    var selectedDIV;
    
    function highlight(node) {
        
        if (selectedDIV) {
            selectedDIV.classList.remove('active');
        }
        selectedDIV = node;
        selectedDIV.classList.add('active');

        createInfoBlock(usersData);
    }
}

function createInfoBlock(usersData) {
    infoBlock.innerHTML = '';

    for (var i = 0; i < usersData.length; i++) {
        var activeMarker = document.getElementById(i);
            
        if (activeMarker.classList.contains('active')) {
            infoBlock.innerHTML += '<div><img src="' + usersData[i].avatar + '"></div><div class="text"><p>First name: ' 
            + usersData[i].first_name + '</p><p>Last name: ' + usersData[i].last_name + '</p></div>';
        }
    }  
}

function showError(status) {
    document.getElementsByClassName('wrapper')[0].innerHTML = 
    '<div class="error"><p>Данные не получены.</p><p>Увы:)</p><p>Зато получена ошибка ' + status +'</p></div>';
}