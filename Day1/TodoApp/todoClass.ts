//import {Todo} from './todoInterface';

class Todos {
    public todoList: Todo[];

    constructor() {
        this.todoList = [];
    }

    add(todo: Todo) {
        this.todoList.push(todo);
        this.display()
    }

    update(id: number, name:string) {
        this.todoList[id].task = name;
        this.display();
    }

    delete(id: number)
    {
        this.todoList.splice(id, 1);
        this.display();
    }

    toggleComplete(id: number)
    {
        this.todoList[id].isDone = !(this.todoList[id].isDone);
        this.display();
    }

    display() {
        let i: any;
        for(i in this.todoList) {
            console.log(this.todoList[i].task + ":" + this.todoList[i].isDone);
            console.log();
        }
    }
}
