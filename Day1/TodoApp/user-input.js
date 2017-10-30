//import {Todos} from './todoClass';
var createBtn = document.getElementById("btn");
var inp = document.getElementById("inp");
var disp = document.getElementById("disp");
var todos = new Todos();
function GetElement(tagName, typeName, className) {
    if (typeName === void 0) { typeName = null; }
    if (className === void 0) { className = null; }
    var el = document.createElement("" + tagName);
    el.setAttribute("type", "" + typeName);
    el.setAttribute('class', "" + className);
    return el;
}
function DisplayTodos() {
    disp.innerHTML = "";
    //Active Todos
    var todo_active = GetElement('div', null, null);
    todo_active.innerHTML += '<h2>Active Todos</h2><br>';
    //Completed Todos
    var todo_complete = GetElement('div', null, null);
    todo_complete.innerHTML += '<h2>Completed Todos</h2><br>';
    var i;
    for (i in todos.todoList) {
        //div
        var todo_el = GetElement('div', null, "isDone" + todos.todoList[i].isDone);
        //task name
        todo_el.innerHTML += todos.todoList[i].task;
        //delete
        var del_button = GetElement('button', 'button', 'close');
        del_button.setAttribute('onclick', "DeleteTodo(" + i + ")");
        del_button.innerHTML = '×';
        todo_el.appendChild(del_button);
        //complete checkbox
        var complete_check = GetElement('input', 'checkbox', 'completeCheckbox');
        complete_check.setAttribute('onclick', "ToggleComplete(" + i + ")");
        if (todos.todoList[i].isDone == true)
            complete_check.setAttribute('checked', 'true');
        todo_el.appendChild(complete_check);
        //edit button
        var todo_update_btn = GetElement('button', null, 'btn btn-default');
        todo_update_btn.innerHTML += 'Edit';
        todo_update_btn.setAttribute('onclick', "UpdateTodo(" + i + ")");
        todo_el.appendChild(todo_update_btn);
        if (todos.todoList[i].isDone == false)
            todo_active.appendChild(todo_el);
        else
            todo_complete.appendChild(todo_el);
    }
    disp.appendChild(todo_active);
    disp.appendChild(todo_complete);
}
function CreateTodo() {
    todos.add({
        task: inp.value,
        isDone: false
    });
    DisplayTodos();
}
function UpdateTodo(id) {
    var name = prompt("Please enter task name", 'new task name');
    if (name != null) {
        todos.update(id, name);
    }
    DisplayTodos();
}
function DeleteTodo(id) {
    todos["delete"](id);
    DisplayTodos();
}
function ToggleComplete(id) {
    todos.toggleComplete(id);
    DisplayTodos();
}
window.onload = function () {
    createBtn.onclick = CreateTodo;
    DisplayTodos();
};
