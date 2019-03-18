export class TodoList {

    constructor(){
        this.newTodo = document.getElementById("new-todo")
        this.addButton = document.getElementById("addTodo")
        this.todoList = document.getElementById("todo-list")
    }
    addToList(id){
        this.todoList.appendChild(this.createLiTag());
        this.clearValue();
        return; 
    }
    createLiTag(){
        const node = document.createElement("li");
        node.setAttribute('class', 'list-group-item');
        const textnode = document.createTextNode(this.newTodo.value);
        node.appendChild(textnode);
        return node;
    }
    clearValue(){
        this.newTodo.value = "";
    }
}