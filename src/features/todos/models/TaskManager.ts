import { Task } from "./Task";

export class TaskManager {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return [...this.tasks]; // copy عشان مفيش حد يعدل على الـ state الأصلي
  }

  addTask(title: string): Task {
    const task = new Task(title);
    this.tasks = [...this.tasks, task];
    return task;
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(id: string) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? task.toggle() : task
    );
  }

  updateTask(id: string, newTitle: string) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? task.updateTitle(newTitle) : task
    );
  }
}
