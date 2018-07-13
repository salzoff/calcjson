'use strict';

const obj = {
    name: 'ECMAScript'
};

const objProtected = Object.freeze(obj);

objProtected.name = 'test';

console.log(objProtected.name);