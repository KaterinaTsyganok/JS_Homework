var container = document.getElementsByClassName('container')[0],
    mainButton = document.getElementById('main-button'),
    minutes =container.getElementsByClassName('minutes')[0],
    seconds =container.getElementsByClassName('seconds')[0],
    milliseconds =container.getElementsByClassName('milliseconds')[0],
    valueWrapper = document.getElementsByClassName('value-wrapper')[0],
    resetButton,
    saveButton;

window.addEventListener('beforeunload', function () {
    localStorage.setItem('mainButtonState', JSON.stringify(mainButton.dataset.state));
    localStorage.setItem('minutes', JSON.stringify(minutes.textContent));
    localStorage.setItem('seconds', JSON.stringify(seconds.textContent));
    localStorage.setItem('milliseconds', JSON.stringify(milliseconds.textContent));
    localStorage.setItem('values', JSON.stringify(valueWrapper.innerHTML));
});

window.addEventListener('load', function () {
    if (localStorage.getItem('mainButtonState') && JSON.parse(localStorage.getItem('mainButtonState')) !== 'start') {
        mainButton.dataset.state = JSON.parse(localStorage.getItem('mainButtonState'));
        mainButton.textContent = JSON.parse(localStorage.getItem('mainButtonState'));
        minutes.textContent = JSON.parse(localStorage.getItem('minutes'));
        seconds.textContent = JSON.parse(localStorage.getItem('seconds'));
        milliseconds.textContent = JSON.parse(localStorage.getItem('milliseconds'));

        container.insertAdjacentHTML('beforeend', '<button id="button-reset">'
            + 'reset</button><button id="button-save">save</button>');
        resetButton = document.getElementById('button-reset');
        saveButton = document.getElementById('button-save');

        valueWrapper.innerHTML = JSON.parse(localStorage.getItem('values'));
        localStorage.clear();

        mainButton.dataset.state === 'stop' && setStopwatch();
    }
});

container.addEventListener('click', checkTarget);

function checkTarget(event) {
    var target = event.target;

    if (target === mainButton) {
        changeButtonState() || setStopwatch();
    } else if (target === resetButton) {
        resetStopwatch();
    } else if (target === saveButton) {
        saveValue();
    }
}

function changeButtonState() {
    switch(mainButton.dataset.state) {
        case 'start':
            mainButton.dataset.state = 'stop';
            mainButton.textContent = 'stop';

            container.insertAdjacentHTML('beforeend', '<button id="button-reset">'
                + 'reset</button><button id="button-save">save</button>');

            resetButton = document.getElementById('button-reset');
            saveButton = document.getElementById('button-save');
            break;
        case 'stop':
            mainButton.dataset.state = 'run';
            mainButton.textContent = 'run';
            break;
        case 'run':
            mainButton.dataset.state = 'stop';
            mainButton.textContent = 'stop';
    }
}

function resetStopwatch() {
    mainButton.dataset.state = 'start'
    mainButton.textContent = 'start';
    milliseconds.textContent = '00';
    seconds.textContent = '00';
    minutes.textContent = '00';
    resetButton.remove();
    saveButton.remove();
    valueWrapper.innerHTML = '';

    if (mainButton !== document.getElementById('main-button')) {
        container.insertAdjacentHTML('afterbegin', '<button id="main-button" data-state="start">start</button>');
        mainButton = document.getElementById('main-button');
    }
    clearInterval(JSON.parse(localStorage.getItem('timerId')));
}

function setStopwatch() {

    switch (mainButton.dataset.state) {
        case 'stop':
            var timerId = setInterval(runStopWatch, 10);
            break;
        case 'run':
            clearInterval(JSON.parse(localStorage.getItem('timerId')));
            localStorage.removeItem('timerId');
    }

    function runStopWatch() {
        addTimePeriod(milliseconds);

        if (+milliseconds.textContent === 100) {
            addTimePeriod(seconds);
            milliseconds.textContent = '00';

            if (+seconds.textContent === 60) {
                addTimePeriod(minutes);
                seconds.textContent = '00';

                if (+minutes.textContent === 60) {
                    clearInterval(timerId);
                    mainButton.remove();
                    saveButton.remove();
                }
            }
        }
        localStorage.setItem('timerId', JSON.stringify(timerId));
    }

    function addTimePeriod(timeBlock) {
        (+timeBlock.textContent < 9) ? timeBlock.textContent = '0' + (+timeBlock.textContent + 1) :
            timeBlock.textContent = +timeBlock.textContent + 1;
    }
}

function saveValue() {
    valueWrapper.insertAdjacentHTML('beforeend', '<div class="value-container">');
    var valueContainer = document.getElementsByClassName('value-container'),
        counter = valueContainer.length;

    valueContainer[counter-1].innerHTML = counter + ') ' + minutes.textContent + ' : ' + seconds.textContent + ' : ' +
        milliseconds.textContent;
}