var list = [1, 2, 3];
var [a, , b, d = 100] = list;
console.log(a, b, d);

console.log(list.length);

list['99'] = 9;

console.log(list.length);

console.log(list.join(' '));