function decorate(label: string) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: true,
            get: function() {
                return label;
            }
        })
    }
}

class A {
    @decorate('hello')
    name:string;
    @decorate('bye')
    check:string;
    constructor(name:string, check:string) {
        this.name = name;
        this.check = check;
    }
    display(){
        console.log(this.name + this.check);
    }
}

var a  = new A('akshay', 'afala');
a.display();