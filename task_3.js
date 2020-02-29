// ДЗ:
// 1. Создать функцию copy, которая принимает на вход 
//один объект и возвращает точную копию (новый объект) с
// теми же свойствами.

var firstObject = {
    name: 'Nick',
    age: 25,
    weight: 55,
}

function getObject(secondObject) {
    var result = {};
    for (key in secondObject) {
        result[key] = secondObject[key];
    }
    return result;
}
console.log(getObject(firstObject));


// 2. Создать функцию isEquil, которая принимает на вход 2 объекта,
// сравнивает их свойства, возвращает true - если объекты одинаковы
// по значениям или false, если чем - то отличаются

let obj1 = {
    name: 'Nick',
    age: 25,
    weight: 55,
}
let obj2 = {
    name: 'Nick',
    age: 25,
    weight: 52,
}

function isEqual(firstObject, secondObject) {

    if (typeof(firstObject) !== 'object' || typeof(secondObject) !== 'object') {
        return false;
    } else if (firstObject === secondObject) {
        return true;
    } else if (Object.keys(firstObject).length != Object.keys(secondObject).length) {
        return false;
    }

    for (let key in firstObject) {
        if (firstObject[key] !== secondObject[key]) {
            return false;
        }
    }
    return true;
}
let result = isEqual(obj1, obj2);
console.log(result);



// 3. первая задачка но с измением name, age color -> перезаписать любыми значениями
// copyWithModify(user, 'Max', 20, 'red');

var origin = {
    name: 'Nick',
    age: 25,
    color: 'red'
}

function copyWithModify(user, name, age, color) {
    var newUser = {};

    for (key in user) {
        newUser[key] = user[key];
        newUser.name = name;
        newUser.age = age;
        newUser.color = color;
    }
    return newUser;
}
console.log(copyWithModify(origin, 'Max', 30, 'blue'));