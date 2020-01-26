// Задание 7:

{
    function transformIntoObject(array) {
        const resultArr = array.filter(person => person.age < 40),
            resultObj = array.find(person => person.name.startsWith('Fedor'));

        return {
            'Пользователи младше 40': resultArr,
            'Пользователь с именем Федор': resultObj
        };
    }

    transformIntoObject([
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]);
}


// Задание 8:

{
    function transformIntoUsersArray(array) {
        return array.map((item, i) => ({[`Пользователь ${i+1}`] : item}));
    }

    transformIntoUsersArray(['Вася', 'Петя', 'Маша']);
}


// Задание 9:

{
    function transformIntoObject(array) {
        return array.reduce((previousValue, item) => Object.assign(previousValue, item), {});
    }

    transformIntoObject([
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ]);
}


// Задание 10:
{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        feed() {
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        }

        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }


    let barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;
}

// Задание 11:

{
    function createPromise(num1, num2) {

        return new Promise((resolve, reject) => {
            [num1, num2] = (num1 > num2) ? [Math.ceil(num2), Math.floor(num1)] : [Math.ceil(num1), Math.floor(num2)];

            if (num1 > num2) {
                reject('в диапазоне нет целых чисел');
            } else {
                let timerID = setInterval(() => {
                    (num1 <= num2) ? console.log(num1++) : clearInterval(timerID) || resolve(--num1);
                }, 1000)
            }
        });
    }

    createPromise(8.1, 8)
        .then(result => console.log(`Последнее запомненное число: ${result}`))
        .catch(error => console.log(`Возникла ошибка в промисе: ${error}`))
        .finally(() => console.log('Работа промиса завершена'));
}