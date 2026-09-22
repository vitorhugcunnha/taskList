import { useState, type FormEvent } from "react";
import { X } from "lucide-react";

import type { Task, TaskCategory } from "../types/Task";

interface EditTaskModalProps {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}

export function EditTaskModal({ task, onClose, onSave }: EditTaskModalProps) {
  const [title, setTitle] = useState(task.title);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [category, setCategory] = useState<TaskCategory>(task.category);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onSave({
      ...task,
      title: trimmedTitle,
      dueDate,
      category,
    });
  }

  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <div className="modal-header">
          <div>
            <span>EDIT TASK</span>
            <h2>Edit task</h2>
          </div>

          <button type="button" className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form className="edit-form" onSubmit={handleSubmit}>
          <label>
            Task name
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <label>
            Due date
            <input
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </label>

          <label>
            Category
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as TaskCategory)
              }
            >
              <option value="study">🎓 Study</option>

              <option value="work">💼 Work</option>

              <option value="personal">👤 Personal</option>
            </select>
          </label>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="save-button">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
