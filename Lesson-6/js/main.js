var mobilemenu = document.querySelector('.js-mobilemenu');
var navigation = document.querySelector('.js-navigation');

mobilemenu.addEventListener('click', function () {
    navigation.classList.toggle('active');
    mobilemenu.classList.toggle('active');
})
