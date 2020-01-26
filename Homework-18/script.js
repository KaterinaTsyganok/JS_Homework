// Задание 1:

/^[a-z]{3,10}_[a-z]{3,10}(-[\d]{4})?@[a-z\d]{1,10}(\.|-)?[a-z\d]{1,10}.com$/i.test('name_surname-1234@gmail.com');


// Задание 2:

function testRhoneNumber(string){
    return (/^(\+?375-?|8-?0)(25|29|33|44|17)-?[1-9]{3}(-?\d{2}){2}$/.test(string)) || false;

}

testRhoneNumber('+375-25-777-77-77');
testRhoneNumber('375299999999');
testRhoneNumber('8-044-444-44-44');
testRhoneNumber('8033-6666666');


// Задание 3:


// вариант 1

function countVowelLetters(text) {
  var vowelArr = text.match(/[аяыиоёуюэеaeiouy]/ig);

  return vowelArr ? vowelArr.length : 0;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
countVowelLetters('Рпц здрвс РтсБффц РпппсвтТТ');


// вариант 2

function countVowelLetters(text) {
  return text.length - text.split(/[аяыиоёуюэеaeiouy]/ig).join('').length;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
countVowelLetters('Рпц здрвс РтсБффц РпппсвтТТ');


// вариант 3

function countVowelLetters(text) {
  var counter = 0;

  text.split('').forEach(function(item) {
      /[аяыиоёуюэеaeiouy]/ig.test(item) && counter++;
  });
  return counter;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
countVowelLetters('Рпц здрвс РтсБффц РпппсвтТТ');