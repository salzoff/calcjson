class Component {
    constructor() {

    }

    static test() {
        console.log('test');
    }
}

class ListComponent extends Component {
    constructor() {
        super();
    }
}

Component.prototype.test2 = function() {
    console.log('test2');
}
let lc = new ListComponent();
Component.test();
lc.test2();