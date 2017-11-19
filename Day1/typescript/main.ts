var a: string;
a = "mango";

var b: boolean;
b = true;

var c: number;
c = 4;

var d: any;
d = 2;
//"any" type can be changed
d = "type changed";
d = false;

var e = 3;
//undefined type cannot be changed. takes the type of initial assignment.
//e = "new type";

var str_arr: string[];
str_arr = ["one", "two"];

//assignment and declaration
var obj1: Object = {};

var obj2: Object;
obj2 = {};

function hello(name:string) {
    console.log(`hello ${name}`);
}
hello("akshay");

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(`hello, ${this.name}`);
    }
}

var p = new Person("Akshay");
p.display();