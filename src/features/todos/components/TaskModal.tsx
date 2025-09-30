import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Task } from "../models/Task";
import Modal from "../../../components/ui/Modal";
import { useAutoResizeTextarea } from "../hooks/useAutoResizeTextarea ";

type TaskModalProps = {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: string, newTitle: string) => void;
};
export function TaskModal({ task, isOpen, onClose, onUpdate }: TaskModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);
  const textareaRef = useAutoResizeTextarea(draft, isEditing);
  const handleSave = () => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== task.title) {
      onUpdate(task.id, trimmed);
    }
    setIsEditing(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Task Details</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          title="Close"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>
      </div>
      {isEditing ? (
        <div className="flex flex-col gap-4">
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none min-h-[60px]"
            autoFocus
            placeholder="Edit task"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => {
                setDraft(task.title);
                setIsEditing(false);
              }}
              className="flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p
            className={`whitespace-pre-wrap ${
              task.completed ? "line-through text-gray-500" : "text-gray-400"
            }`}
          >
            {task.title}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="self-start bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Edit
          </button>
        </div>
      )}
    </Modal>
  );
}
