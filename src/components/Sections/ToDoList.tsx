import { useState } from "react";
import { TaskManager } from "../../features/todos/models/TaskManager";
import type { Task } from "../../features/todos/models/Task";
import TaskInput from "../../features/todos/components/TaskInput";
import TaskList from "../../features/todos/components/TaskList";


const taskManager = new TaskManager();

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>(taskManager.getTasks());

  const refresh = () => setTasks([...taskManager.getTasks()]);

  const handleAddTask = (title: string) => {
      taskManager.addTask(title);
      console.log(taskManager.getTasks());
    refresh();
  };

  const handleToggleTask = (id: string) => {
    taskManager.toggleTask(id);
    refresh();
  };

  const handleDeleteTask = (id: string) => {
    taskManager.removeTask(id);
    refresh();
  };

  const handleUpdateTask = (id: string, newTitle: string) => {
    taskManager.updateTask(id, newTitle);
    refresh();
  };

  return (
    <section className="bg-green-400/20 rounded-3xl p-4 shadow-md w-full max-w-2xl mx-auto min-h-full">
      <TaskInput onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
    </section>
  );
};

export default ToDoList;
