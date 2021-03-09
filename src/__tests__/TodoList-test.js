import { render, fireEvent } from "@testing-library/react";
import { TodoList } from "../TodoList";

describe("TodoList", () => {
  it("TodoList keep the old list selections when there are new items", () => {
    const { getByTestId, rerender } = render(
      <TodoList items={["Apple", "Banana"]} />
    );
    // Apple is not selected
    expect(getByTestId("Apple-checkbox")).toHaveProperty("checked", false);
    expect(getByTestId("Banana-checkbox")).toHaveProperty("checked", false);

    fireEvent.click(getByTestId("Apple-checkbox"));
    expect(getByTestId("Apple-checkbox")).toHaveProperty("checked", true);
    rerender(<TodoList items={["Apple", "Banana", "Cat"]} />);
    // Apple's selection is still there
    expect(getByTestId("Apple-checkbox")).toHaveProperty("checked", true);
  });
});
