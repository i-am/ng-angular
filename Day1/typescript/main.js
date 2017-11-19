var a;
a = "mango";
var b;
b = true;
var c;
c = 4;
var d;
d = 2;
//"any" type can be changed
d = "type changed";
d = false;
var e = 3;
//undefined type cannot be changed. takes the type of initial assignment.
//e = "new type";
var str_arr;
str_arr = ["one", "two"];
//assignment and declaration
var obj1 = {};
var obj2;
obj2 = {};
function hello(name) {
    console.log("hello " + name);
}
hello("akshay");
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log("hello, " + this.name);
    };
    return Person;
}());
var p = new Person("Akshay");
p.display();
