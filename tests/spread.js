function test(...other) {
    var [x, y] = other;
    return (x+y) * other.length;
}

console.log(test(1, 2, 3, 4, 5, 6));