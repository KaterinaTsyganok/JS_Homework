function Animal(name) {
  this.name = name;
  this._foodAmount = 100;

  this._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
  };

  this.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
      return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
  };

  var self = this;

  this.feed = function() {
      console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}


function Cat(name) {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;

  this.feed = function() {
    animalFeed();
    console.log('Кот доволен ^_^');
    return this;
  };

  this.stroke = function() {
    console.log('Гладим кота.');
    return this;
  };
}

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());



