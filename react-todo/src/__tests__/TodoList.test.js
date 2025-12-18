import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, {
      target: { value: "New Todo Item" },
    });

    fireEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");

    // Initially not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    // const todo = screen.getByText("Learn Testing");
    // const deleteButton = todo.nextSibling;

    // const deleteButton = screen.getByRole("button", { name: "Delete" });

    // fireEvent.click(deleteButton);

    // expect(
    //   screen.queryByText("Learn Testing")
    // ).not.toBeInTheDocument();

     // Find the <li> that contains the todo text
  const todoItem = screen.getByText("Learn Testing").closest("li");

  // Find the Delete button within that specific <li>
  const deleteButton = within(todoItem).getByText("Delete");

  // Click it
  fireEvent.click(deleteButton);

  // Assert the todo is gone
  expect(screen.queryByText("Learn Testing")).not.toBeInTheDocument();
  });
});