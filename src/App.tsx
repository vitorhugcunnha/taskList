import { useEffect, useState } from "react";

import { loadTasks, saveTasks } from "./utils/taskStorage";

import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Circle,
  GraduationCap,
  Inbox,
  ListTodo,
  Pencil,
  Trash2,
  UserRound,
} from "lucide-react";

import { EditTaskModal } from "./components/EditTaskModal";
import { TaskForm } from "./components/TaskForm";

import type { Task, TaskCategory } from "./types/Task";

import "./App.css";

type Filter = "all" | "today" | "completed";

function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  const [filter, setFilter] = useState<Filter>("all");

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function handleAddTask(
    title: string,
    dueDate: string,
    category: TaskCategory,
  ) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      dueDate,
      category,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function handleToggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function handleDeleteTask(id: string) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  function handleUpdateTask(updatedTask: Task) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );

    setEditingTask(null);
  }

  function getCategoryInfo(category: TaskCategory) {
    switch (category) {
      case "study":
        return {
          name: "Estudo",
          icon: <GraduationCap size={18} />,
        };

      case "work":
        return {
          name: "Trabalho",
          icon: <BriefcaseBusiness size={18} />,
        };

      case "personal":
        return {
          name: "Pessoal",
          icon: <UserRound size={18} />,
        };
    }
  }

  function formatDate(date: string) {
    if (!date) {
      return "Sem data";
    }

    return new Date(`${date}T00:00:00`).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
    });
  }

  const today = new Date().toISOString().split("T")[0];

  const filteredTasks = tasks.filter((task) => {
    if (filter === "today") {
      return task.dueDate === today;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">
            <ListTodo size={24} />
          </div>

          <span>TaskList</span>
        </div>

        <nav className="sidebar-menu">
          <button
            className={filter === "all" ? "menu-item active" : "menu-item"}
            onClick={() => setFilter("all")}
          >
            <Inbox size={19} />

            <span>Todas as tarefas</span>

            <strong>{tasks.length}</strong>
          </button>

          <button
            className={filter === "today" ? "menu-item active" : "menu-item"}
            onClick={() => setFilter("today")}
          >
            <CalendarDays size={19} />

            <span>Hoje</span>
          </button>

          <button
            className={
              filter === "completed" ? "menu-item active" : "menu-item"
            }
            onClick={() => setFilter("completed")}
          >
            <CheckCircle2 size={19} />

            <span>Concluídas</span>
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <div>
            <p className="header-label">MINHAS TAREFAS</p>

            <h1>Organize seu dia</h1>

            <p>
              Você possui <strong>{pendingTasks}</strong>{" "}
              {pendingTasks === 1 ? "tarefa pendente." : "tarefas pendentes."}
            </p>
          </div>

          <div className="task-summary">
            <span>{tasks.length}</span>
            <p>Total</p>
          </div>
        </header>

        <TaskForm onAddTask={handleAddTask} />

        <section className="tasks-section">
          <div className="section-header">
            <div>
              <h2>
                {filter === "all" && "Todas as tarefas"}
                {filter === "today" && "Tarefas de hoje"}
                {filter === "completed" && "Tarefas concluídas"}
              </h2>

              <p>
                {filteredTasks.length}{" "}
                {filteredTasks.length === 1
                  ? "tarefa encontrada"
                  : "tarefas encontradas"}
              </p>
            </div>
          </div>

          <div className="task-list">
            {filteredTasks.length === 0 ? (
              <div className="empty-state">
                <CheckCircle2 size={42} />

                <h3>Nenhuma tarefa por aqui</h3>

                <p>Adicione uma nova tarefa para começar.</p>
              </div>
            ) : (
              filteredTasks.map((task) => {
                const category = getCategoryInfo(task.category);

                return (
                  <article
                    className={`task-card ${task.completed ? "completed" : ""}`}
                    key={task.id}
                  >
                    <button
                      className="complete-button"
                      onClick={() => handleToggleTask(task.id)}
                      title={
                        task.completed
                          ? "Marcar como pendente"
                          : "Marcar como concluída"
                      }
                    >
                      {task.completed ? (
                        <CheckCircle2 size={24} />
                      ) : (
                        <Circle size={24} />
                      )}
                    </button>

                    <div className="task-content">
                      <h3>{task.title}</h3>

                      <div className="task-details">
                        <span className="category">
                          {category.icon}
                          {category.name}
                        </span>

                        <span className="date">
                          <CalendarDays size={16} />
                          {formatDate(task.dueDate)}
                        </span>
                      </div>
                    </div>

                    <div className="task-actions">
                      <button
                        className="edit-button"
                        onClick={() => setEditingTask(task)}
                        title="Editar tarefa"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => handleDeleteTask(task.id)}
                        title="Excluir tarefa"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </section>
      </main>

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleUpdateTask}
        />
      )}
    </div>
  );
}

export default App;
