function foo() {
    return 'other';
}
let obj = {
    foo: 'name',
    ['prop_' + foo()]: 'bar'
};

for (let p in obj) {
    console.log(p, obj[p]);
}