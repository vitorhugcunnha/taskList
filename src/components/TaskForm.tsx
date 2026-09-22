import { useState, type FormEvent } from "react";
import { Plus } from "lucide-react";

import type { TaskCategory } from "../types/Task";

interface TaskFormProps {
  onAddTask: (title: string, dueDate: string, category: TaskCategory) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState<TaskCategory>("study");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAddTask(trimmedTitle, dueDate, category);

    setTitle("");
    setDueDate("");
    setCategory("study");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-main">
        <input
          type="text"
          placeholder="O que você precisa fazer?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="task-form-options">
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as TaskCategory)}
        >
          <option value="study">🎓 Estudo</option>

          <option value="work">💼 Trabalho</option>

          <option value="personal">👤 Pessoal</option>
        </select>

        <button type="submit">
          <Plus size={18} />
          Adicionar
        </button>
      </div>
    </form>
  );
}
