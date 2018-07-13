function showMe(strings, ...values) {
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(values[0]);
}

let val = '33';
showMe(`Hallo ${val} Welt`);
showMe `Hallo ${val} Welt`;

