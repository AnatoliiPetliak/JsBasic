// Домашка 1. Есть массив чисел, посчитать сумму всех элементов используя
// for обычный и forEach.Реализовать через функцию, которая на вход принимает
// массив.

//for
function arraySum(array, callback) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        callback(sum);
    }
}

var testNum1 = [34, 1, 23, 4, 6, 8, 5];

arraySum(testNum1, function(sum) {
    console.log(sum);
});



//forEach
var arr = [25, 58, 57, 51, 54, 25, 56, 45];
var sum = 0;

function getArrSum(item) {
    sum = sum + item;
}
arr.forEach(getArrSum);
console.log(sum);


// 2. Функиция принимает два массива.Возвращает новый массив, 
//где каждый элемент это сумма двух других массив
// var first = [2, 3]  var second = [3, 2]  var result = [5, 5];
// Реализовать через forEach и for


//for
var arr1 = [2, 5, 7, 8, 9];
var arr2 = [3, 4, 5, 9, 8];

function getArrSum(firstArray, secondArray) {
    var arr3 = [];

    for (var i = 0; i < firstArray.length; i++) {
        if (firstArray.length == secondArray.length) {
            arr3.push(firstArray[i] + secondArray[i])
        } else {
            return ('Arrays are not Equal');
        }
    }
    return arr3;
};
console.log(getArrSum(arr1, arr2));

//forEach

var arr1 = [2, 5, 7, 8, 9];
var arr2 = [3, 4, 5, 9, 8];

function getArrSum(firstArray, secondArray) {

    firstArray.forEach(function(item, index) {
        if (firstArray.length == secondArray.length) {
            console.log(item + secondArray[index]);
        } else {
            console.log('Arrays are not Equal');
        }
    });
};
getArrSum(arr1, arr2);


// 3. Есть 3 массива, посчитать их общую сумму.На выходе одно число.
// Должна быть функция, которая принимае эти 3 массива, на выходе 
//возвращает 1 число


//for
var arr1 = [2, 5, 7, 8, 9];
var arr2 = [3, 4, 5, 9, 8];
var arr3 = [2, 4, 5, 8, 8];


function getArrSum(firstArray, secondArray, thirdArray) {
    var arr4 = [];
    var sum = 0;

    for (i = 0; i < firstArray.length; i++) {
        arr4.push(firstArray[i] + secondArray[i] + thirdArray[i]);
        sum = sum + arr4[i];
    }
    console.log(sum);
}
getArrSum(arr1, arr2, arr3);

//forEach
var arr1 = [2, 5, 7, 8, 9];
var arr2 = [3, 4, 5, 9, 8];
var arr3 = [2, 4, 5, 8, 8];
var sum = 0;

function getArrSum(firstArray, secondArray, thirdArray) {
    firstArray.forEach(function(item, index) {
        if (firstArray.length == secondArray.length && firstArray.length == thirdArray.length) {
            console.log(item + secondArray[index] + thirdArray[index], index);
        } else {
            console.log('Arrays are not Equal');
        }
    });
};
getArrSum(arr1, arr2, arr3);


// 4. Есть массив[1, 4, 5, 1, 3, 3] На основе его создать новый массив, где
// будут квардат каждого число, используя
// for и map


//for
var arr = [1, 4, 5, 1, 3, 3];
var sqr = [];

for (var i = 0; i < arr.length; i++) {
    sqr.push(arr[i] * arr[i]);
}
console.log(sqr)

//map
var arr = [1, 4, 5, 1, 3, 3];

var arr2 = arr.map(value => value * value);
console.log(arr2)

var arr1 = [1, 4, 5, 1, 3, 3];

var arr2 = arr1.map(function(value) {
    return value * value;
});
console.log(arr2);




// 5. Есть массив имен['fasf', 'cvser', 'fdsf'].На вход функции
// Создать новый массив на выходе, который вернет имена, которые меньше 4 букв
// Цикл for i метод filter

//for
// var userNames = ['Nick', 'Jack', 'Met', 'John', 'Garald'];

function getNewUser(users) {
    var result = users.filter(word => word.length <= 4);
    return result;
}
console.log(userNames);

filter
var userNames = ['Nick', 'Jack', 'Met', 'John', 'Garald'];

function getNewUser(users) {
    var newArr = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].length <= 4) {
            newArr.push(users[i]);
        }
    }
    return newArr;
}
console.log(getNewUser(userNames));