import { Task } from "../models/Task";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
};

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onUpdate,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No tasks yet. Add New Task ✨
      </p>
    );
  }

  return (
    <ul className="mt-4 flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
