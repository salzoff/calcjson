class MyGen {
    constructor() {
        for (let e of this.range(100, 115)) {
            console.log(e);
        }
    }

    *range(from = 0, to = 10) {
        let step = from;
        while (step < to) {
            yield step;
            step += 2;
        }
    }
}
new MyGen();