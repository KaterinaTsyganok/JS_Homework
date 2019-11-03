// Задание 1:

function Animal(name) {
    this._name = name;
    this._foodAmount = 100;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};
   
Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};
   

function Cat(name) {
    Animal.apply(this, arguments);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};
  
    
var barsik = new Cat('Барсик');
  

// Задание 2:

function deepClone(object) {
    var clonedObj;
  
    if (Array.isArray(object)) {
        clonedObj = [];

        for (var i = 0; i < object.length; i++) {
            clonedObj[i] = deepClone(object[i]);
        }
    }
      
    else if (typeof object === 'object' && object) {
        clonedObj = {};

        for (var key in object) {
            clonedObj[key] = deepClone(object[key]);
        }
    }

    else {
        return object;
    }
     
    return clonedObj;
};


// Задание 3:

function compareObjects(object1, object2) {

  // проверка на равенство количества свойств в объектах

    var propAmount1 = 0,
        propAmount2 = 0;

    for (var key in object1) {

        if (object1.hasOwnProperty(key)) {
            propAmount1++;
        }

    }

    for (var key in object2) {

        if (object2.hasOwnProperty(key)) {
            propAmount2++;
        }

    }

    if (propAmount1 !== propAmount2) {
        return false;
    }

    var areEqual; 

    if (typeof object1 === typeof object2) { // проверка на равенство типов 

        if (typeof object1 === 'object' && object1 !== null) { // для объектов и массивов

            for (var key in object1) {

                if (!compareObjects(object1[key], object2[key])) {
                    return areEqual = false;
                } else {
                    areEqual = true;
                }

            }
            return true;
        }    

        else if (typeof object1 === 'function') { // для методов

            if (object1.toString() === object2.toString()) {
                return areEqual = true;
            } else {
                return areEqual = false;
            }

        } 
      
        else if (typeof object1 !== 'object' || object1 === null ) { // для примитивов
          
            if (object1 === object2) {
                return areEqual = true;
            } else {
                return areEqual = false;
            }
            
        }

    } else {
        areEqual = false;
    }

    return areEqual;
};





