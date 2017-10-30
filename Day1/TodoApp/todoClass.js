//import {Todo} from './todoInterface';
var Todos = /** @class */ (function () {
    //public taskList: string [];
    //public isDoneList: boolean [];
    function Todos() {
        this.todoList = [];
        //this.taskList = [];
        //this.isDoneList = [];
    }
    Todos.prototype.add = function (todo) {
        this.todoList.push(todo);
        // this.taskList.push(todo.task);
        // this.isDoneList.push(false);
        this.display();
    };
    Todos.prototype.update = function (id, name) {
        this.todoList[id].task = name;
        this.display();
    };
    Todos.prototype["delete"] = function (id) {
        this.todoList.splice(id, 1);
        this.display();
    };
    Todos.prototype.toggleComplete = function (id) {
        this.todoList[id].isDone = !(this.todoList[id].isDone);
        this.display();
    };
    Todos.prototype.display = function () {
        var i;
        for (i in this.todoList) {
            console.log(this.todoList[i].task + ":" + this.todoList[i].isDone);
            console.log();
        }
    };
    return Todos;
}());
