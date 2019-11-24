(function() {
    var xhr = new XMLHttpRequest();
       
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true); 
    xhr.send();
    
    xhr.onload = function() {

        try {
            JSON.parse(this.response);
            throw { name:'MyError', message:'Это ошибка номер 1' };
            //throw new Error('Это ошибка номер 2');
        } catch(ex) {
            console.log('возникло исключение!');
            console.log('тип исключения: '+ex.name + ', текст исключения: ' +ex.message);
        }
        console.log('этот код тоже выполняется');
    };
    
    xhr.onerror = function() {
        console.error(this.status);
    };
    
    xhr.onloadend = function() {
        console.log('Запрос завершен');
    };
})();
    