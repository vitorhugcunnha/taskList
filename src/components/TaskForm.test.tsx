import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { TaskForm } from "./TaskForm";

describe("TaskForm", () => {
  it("should render the task form", () => {
    render(
      <TaskForm onAddTask={() => {}} />,
    );

    expect(
      screen.getByPlaceholderText(
        "O que você precisa fazer?",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /adicionar/i,
      }),
    ).toBeInTheDocument();
  });

  it("should add a new task", async () => {
    const user = userEvent.setup();

    const onAddTask = vi.fn();

    render(
      <TaskForm onAddTask={onAddTask} />,
    );

    const input =
      screen.getByPlaceholderText(
        "O que você precisa fazer?",
      );

    await user.type(
      input,
      "Study TypeScript",
    );

    await user.click(
      screen.getByRole("button", {
        name: /adicionar/i,
      }),
    );

    expect(onAddTask).toHaveBeenCalledTimes(1);

    expect(onAddTask).toHaveBeenCalledWith(
      "Study TypeScript",
      "",
      "study",
    );
  });

  it("should not add an empty task", async () => {
    const user = userEvent.setup();

    const onAddTask = vi.fn();

    render(
      <TaskForm onAddTask={onAddTask} />,
    );

    await user.click(
      screen.getByRole("button", {
        name: /adicionar/i,
      }),
    );

    expect(onAddTask).not.toHaveBeenCalled();
  });
});

it("does not add a task with less than 3 characters", async () => {
  const user = userEvent.setup();
  const onAddTask = vi.fn();

  render(<TaskForm onAddTask={onAddTask} />);

  const input = screen.getByPlaceholderText(/o que você precisa fazer/i);

  await user.type(input, "ab");
  await user.click(screen.getByRole("button", { name: /adicionar/i }));

  expect(onAddTask).not.toHaveBeenCalled();
});