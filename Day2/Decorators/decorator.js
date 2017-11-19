var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorate(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: true,
            get: function () {
                return label;
            }
        });
    };
}
var A = /** @class */ (function () {
    function A(name, check) {
        this.name = name;
        this.check = check;
    }
    A.prototype.display = function () {
        console.log(this.name + this.check);
    };
    __decorate([
        decorate('hello')
    ], A.prototype, "name");
    __decorate([
        decorate('bye')
    ], A.prototype, "check");
    return A;
}());
var a = new A('akshay', 'afala');
a.display();
