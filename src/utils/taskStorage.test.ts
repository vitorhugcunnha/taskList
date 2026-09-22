import { beforeEach, describe, expect, it } from "vitest";

import {
  loadTasks,
  saveTasks,
} from "./taskStorage";

import type { Task } from "../types/Task";

describe("taskStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return an empty array when there are no stored tasks", () => {
    const tasks = loadTasks();

    expect(tasks).toEqual([]);
  });

  it("should save tasks to local storage", () => {
    const tasks: Task[] = [
      {
        id: "1",
        title: "Study React",
        completed: false,
        dueDate: "2026-09-25",
        category: "study",
      },
    ];

    saveTasks(tasks);

    const storedTasks = localStorage.getItem(
      "tasklist:tasks",
    );

    expect(storedTasks).not.toBeNull();
    expect(JSON.parse(storedTasks!)).toEqual(tasks);
  });

  it("should load stored tasks", () => {
    const tasks: Task[] = [
      {
        id: "1",
        title: "Finish PGCS",
        completed: true,
        dueDate: "2026-09-30",
        category: "work",
      },
    ];

    localStorage.setItem(
      "tasklist:tasks",
      JSON.stringify(tasks),
    );

    const result = loadTasks();

    expect(result).toEqual(tasks);
  });

  it("should return an empty array when stored data is invalid", () => {
    localStorage.setItem(
      "tasklist:tasks",
      "invalid-json",
    );

    const result = loadTasks();

    expect(result).toEqual([]);
  });
});