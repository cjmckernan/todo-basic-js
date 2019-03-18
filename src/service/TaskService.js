import { TodoList } from '../component/TodoList'


export class TaskService {

    constructor (){
        this.list = [];
        this.todoList = new TodoList();
    }
    addTask(){
        console.log(this.todoList.newTodo.value)
        if(this.todoList.newTodo.value.length!=0){
            this.list.push(this.todoList.addButton.value)
            this.todoList.addToList(0)
        }
    }
    onClick(cb){
        this.todoList.addButton.addEventListener("click", cb);
    }
}
