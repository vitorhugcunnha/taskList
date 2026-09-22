import type { Task } from "../types/Task";

const STORAGE_KEY = "tasklist:tasks";

export function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (!storedTasks) {
    return [];
  }

  try {
    const parsedTasks = JSON.parse(storedTasks);

    if (!Array.isArray(parsedTasks)) {
      return [];
    }

    return parsedTasks;
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(tasks),
  );
}