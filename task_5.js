// PUSH
var arr1 = ['Miki', 'Sara', 'Dima'];

function getPush(...restArg) {
    newArr = restArg[0];

    for (var i = 1; i < restArg.length; i++) {
        newArr[newArr.length] = restArg[i];
    }
}
getPush(arr1, 11, 22, 55, 'Kiril', true);
console.log(newArr);


//forEach++
var each = function(arr, callback) {
    var i, length = arr.length;

    for (i = 0; i < length; i = i + 1) {
        callback(arr[i], i, arr);
    }
};
var testNumbers = [45, 56, 76, 55, 23, 13, 8, 9, 7, 6];

each(testNumbers, function(item, index, arr) {
    console.log('Number: ' + index + ', index: ' + item + ',', arr)
});



//FILTER++
var test = [5, 14, 2, 25, 48];

var filter = function(arr, callback) {
    var results = [];

    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};

var data = filter(test, function(str) {
    return str >= 10;
});
console.log(data);


//MAP
var map = function(arr, callback, thisArg) {
    results = [];

    for (var i = 0; i < arr.length; i++) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};

var shortNames = map(['Dimdimuch', 'Sansanuch', 'Fixifixich'], function(modifiedArr) {
    return modifiedArr.slice(0, 5);
});
console.log(shortNames);

// //EVERY
var arr = ['100$', '200$', '300$'];

function getPrise(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

function getSalePosition(item) {
    if (item.length > 4) {
        console.log(item.length);
        return true;
    }
}

var result = getPrise(arr, getSalePosition);
console.log(result)

//SOME
var arr = ['100$', '200$', '300$'];

function getPrise(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

function getSalePosition(item) {

    if (item.length > 300) {
        return true
    } else {
        return false
    }
}

var result = getPrise(arr, getSalePosition);
console.log(result);



//deepEqual

var obj1 = {
    name: "Dima",
    age: 25,
    isAdmin: false,
    canSpeak: true,
    get: function(a, b) {
        return a + b;
    },
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
        mother: {
            name: "Катя",
            hobbies: ["Пляж", "Фото", "Море"],
            friends: [{
                name: "Петр",
                age: 49
            }]
        },

        father: {
            name: "Виктор",
            hobbies: ["Бег", "Солнце", "Туризм"],
            friends: [{
                name: "Алексей",
                age: 40
            }]
        }
    }
};
var obj2 = {
    name: "Dima",
    age: 25,
    isAdmin: false,
    canSpeak: true,
    get: function(a, b) {
        return a + b;
    },
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
        mother: {
            name: "Катя",
            hobbies: ["Пляж", "Фото", "Море"],
            friends: [{
                name: "Петр",
                age: 49
            }]
        },

        father: {
            name: "Виктор",
            hobbies: ["Бег", "Солнце", "Туризм"],
            friends: [{
                name: "Алексей",
                age: 40
            }]
        }
    }
};


Object.keys = function(firstObj, secondObj) {

    for (var p in firstObj) {

        if (firstObj.hasOwnProperty(p) !== secondObj.hasOwnProperty(p))
            return false;

        switch (typeof(firstObj[p])) {

            case 'null':
                if (first !== null || second !== null) {
                    return false;
                }
                break;

            case 'object':
                if (!Object.keys(firstObj[p], secondObj[p]))
                    return false;
                break;

            case 'function':
                if (typeof(secondObj[p]) == 'undefined' || (p != 'keys' && firstObj[p].toString() != secondObj[p].toString())) {
                    return false;
                }
                break;

            default:
                if (firstObj[p] != secondObj[p]) {
                    return false;
                }

        }
    }

    for (var p in secondObj) {
        if (typeof(firstObj[p]) == 'undefined') {
            return false;
        }
    }
    return true;
};

console.log(Object.keys(obj1, obj2));