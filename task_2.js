// 1. Используя все 3 варианта цикла
// Есть строка 'adfsdfdsaffasfaaaaasfsfasfdsf'
// проверить, сколько раз встречается буква 'a' и 
//вывести ее в консоль
// 2. Тоже самое только в функции, которая принимает 
//2 параметра
// первый - строка
// вторая - буква, которую ищем



// //while+

var result = 0;
count = 0;
var testString = 'adfsdfdsaffasfaaaaasfsfasfdsf';

while (testString.length > count) {
    if (testString[count] === 'a') {
        result += 1;
    }
    count += 1;
}
console.log(result, 'a');


// //Do..while+
var someString = 'adfsdfdsaffasfaaaaasfsfasfdsf';
var count = 0;
var i = 0;

do {
    if (someString[i] === 'a') {
        count += 1;
    }
    i += 1;
} while (i < someString.length);
console.log(count, 'a');

//For+
var someString = 'adfsdfdsaffasfaaaaasfsfasfdsf';
count = 0;

for (var i = 0; i < someString.length; i++) {
    if (someString[i] === 'a') {
        count += 1;
    }
}
console.log(count, 'a');

//строку в масив
var someString = 'adfsdfdsaffasfaaaaasfsfasfdsf'.split('');
var result = {};
for (var i = 0; i < someString.length; ++i) {
    var a = someString[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
}
console.log(result);

//Function+
var testString = 'adfsdfdsaffasfaaaaasfsfasfdsf';
var testVAlue = 'a';

function getSum(str, char) {
    var sum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            sum += 1;
        }
    }
    return sum + char;
}
let result = getSum(testString, testVAlue);
console.log(result);