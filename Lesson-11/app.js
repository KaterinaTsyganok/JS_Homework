//  Задание 1:

function changeArr(arr) {

    var newArr = arr.map(function(item) {
        return {'name': item};
    });

    return newArr;
}

changeArr(['Peter', 'John', 'Kate']);
  


//  Задание 2:

function getTime(arr) {

    return arr.reduce(function(prev, curr) {
        return prev + ' : ' + curr;
    }, 'Текущее время');

}

getTime(['00', '13', '24']);



//  Задание 3:

function getVowelNumber(text) {
    
    var vowelArray = ['a', 'e', 'i', 'o', 'u'],
        vowelNumber = 0;

    var array = text.toLowerCase().split('');

    array.forEach(function(itemArray) {

        vowelArray.forEach(function(itemVowelArray) {

            if (itemArray === itemVowelArray) {
                vowelNumber++;
            }
        });
    });

    return vowelNumber;
};

getVowelNumber('Hi! My name is Kate.');



//  Задание 4:

function changeText(text) {

    var textArr = text.split(/[.!?]/);

    textArr.forEach(function(item, i) {

        if (item.length < 1) {
            textArr.splice(i, 1);
        } else {
            console.log(item.trim() + ' ' + item.split(/[,\s]/).join('').length);
        }

    });
};

changeText('В лесу родилась ёлочка, в лесу она росла. Зимой и летом стройная? Зелёная была! Или росла? Да');



//  Задание 5 *:

function getRepeatedWord(text) {
    var repeatedWord,
        repeatedWordNumber = 0,
        tempWord,
        tempWordNumber = 1;

    var textArr = text.toLowerCase().split(/[.,!?\s]/).sort();
    
    for (var i = 0; i < textArr.length; i++) {

        while (textArr[i].length < 1) {
            textArr.splice(i, 1);
        }
                 
        if (textArr[i] === textArr[i + 1]) {
            tempWord = textArr[i];
            tempWordNumber++;
            continue;
        }

        if (tempWordNumber > repeatedWordNumber) {
            repeatedWord = tempWord;
            repeatedWordNumber = tempWordNumber;
        }

        tempWordNumber = 1;
        
    };

    return 'Максимальное число повторений у слова "' + repeatedWord + '" - ' + repeatedWordNumber;
};

console.log(getRepeatedWord('В лесу родилась ёлочка, там она росла. Зимой и летом стройная, зелёная была! Или спала, или росла, или пряталась?'));