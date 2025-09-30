import { useState, useRef, useEffect } from "react";
import { Task } from "../models/Task";
import {
  FaTrash,
  FaEdit,
  FaCheckCircle,
  FaRegCircle,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { TaskModal } from "./TaskModal";
import "../../../styles/task-item.scss";
type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onUpdate,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(
        textRef.current.scrollWidth > textRef.current.clientWidth
      );
    }
  }, [task.title]);

  const handleSave = () => {
    if (title.trim()) {
      onUpdate(task.id, title.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(task.title);
    setIsEditing(false);
  };

  return (
    <>
      <li className="task-item">
        <div className="task-item-left">
          <button
            onClick={() => onToggle(task.id)}
            className="task-toggle"
            title="Toggle completion"
          >
            {task.completed ? (
              <FaCheckCircle size={20} />
            ) : (
              <FaRegCircle size={20} />
            )}
          </button>

          {isEditing ? (
            <input
              placeholder="Update task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              className="w-full border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
              autoFocus
            />
          ) : (
            <span
              ref={textRef}
              className={`task-item-text ${task.completed ? "completed" : ""}`}
            >
              {task.title}
            </span>
          )}

          {isOverflowing && !isEditing && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="task-expand"
              title="Expand task"
            >
              <FaChevronRight size={16} />
            </button>
          )}
        </div>

        <div className="task-action">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save" title="Save">
                <FaCheckCircle size={18} />
              </button>
              <button onClick={handleCancel} className="cancel" title="Cancel">
                <FaTimes size={18} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="edit"
                title="Edit"
              >
                <FaEdit size={18} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="delete"
                title="Delete"
              >
                <FaTrash size={18} />
              </button>
            </>
          )}
        </div>
      </li>

      {/* Modal for overflowed text */}
      <TaskModal
        task={task}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={onUpdate}
      />
    </>
  );
}
