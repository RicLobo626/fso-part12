import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from ".";

describe("Todo", () => {
  const handleDeleteMock = vi.fn();
  const handleCompleteMock = vi.fn();

  const todo = {
    text: "Learn Docker",
    done: false,
  };

  beforeEach(() => {
    render(<Todo todo={todo} onDelete={handleDeleteMock} onComplete={handleCompleteMock} />);
  });

  it("shows delete and complete buttons", () => {
    const deleteBtn = screen.getByRole("button", { name: "Delete" });
    const completeBtn = screen.getByRole("button", { name: "Set as done" });

    expect(deleteBtn).toBeDefined();
    expect(completeBtn).toBeDefined();
  });

  it("when delete and complete buttons are clicked, their respective handlers are called once", async () => {
    const user = userEvent.setup();
    const completeBtn = screen.getByRole("button", { name: "Set as done" });
    const deleteBtn = screen.getByRole("button", { name: "Delete" });

    await user.click(completeBtn);
    await user.click(deleteBtn);

    expect(handleCompleteMock.mock.calls).toHaveLength(1);
    expect(handleDeleteMock.mock.calls).toHaveLength(1);
  });
});
