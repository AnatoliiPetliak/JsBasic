//'1 -st result'
var red = '50';
var green = '60';
var blue = '100';

var random = Math.floor((Math.random() * 10) + 1);
alert(`background-color: rgba(${red}, ${green}, ${blue}, ${random})`);




//'2 -nd result'
var MIN_AGE = 18;

var age = +prompt('How old are you?', MIN_AGE);
console.log(typeof(age));

if (typeof(age) == 'string') {
    alert('Correct your string');
} else if (typeof(age) == 'isNaN') {
    alert('ERROR');
}

var message = (age >= 18) ? 'You have a permition to enter!' : 'You are not to be allowed';
console.log(message);



//4-th result

var number1 = 50;
var number2 = 20;

var max = number1 > number2 ? number1 : number2;
console.log(max);




//5-th result

var num = +prompt("Введите число?", '');
console.log(typeof(num));

switch (typeof(num) == 'number') {
    case num > 0 && num <= 2:
        alert("Сутки только начались");
        break;
    case num > 2 && num <= 5:
        console.log(num > 2 && num <= 5);
        alert("Еще рано, можно спать");
        break;
    case num > 5 && num <= 7:
        alert("Мам, можно еще чуть-чуть по спать");
        break;
    case num > 7 && num <= 10:
        alert("Собираемся в школу");
        break;
    case num > 10 && num <= 14:
        alert("Уроки в школе");
        break;
    case num > 14 && num <= 17:
        alert("Продленка");
        break;
    case num > 17 && num <= 19:
        alert("Дорога домой");
        break;
    case num > 19 && num <= 23:
        alert("Урррааа :)");
        break;
    default:
        alert("Нет таких значений!");
}


var num = +prompt("Введите число?", '');

if (num > 0 && num <= 2) {
    alert("Сутки только начались");
} else if (num > 2 && num <= 5) {
    alert("Еще рано, можно спать");
} else if (num > 5 && num <= 7) {
    alert("Мам, можно еще чуть-чуть по спать");
} else if (num > 7 && num <= 10) {
    alert("Собираемся в школу");
} else if (num > 10 && num <= 14) {
    alert("Уроки в школе");
} else if (num > 14 && num <= 17) {
    alert("Продленка");
} else if (num > 17 && num <= 19) {
    alert("Дорога домой");
} else if (num > 19 && num <= 23) {
    alert("Урррааа :)");
} else if (num > 23) {
    alert("Нет таких значений!");
}