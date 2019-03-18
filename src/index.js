import { TaskService } from './service/TaskService';
import "./style.scss";
const taskService = new TaskService();

taskService.onClick(() => {
    taskService.addTask()
})
