import { render, fireEvent } from "@testing-library/react";
import { TodoList } from "../TodoList";

describe("TodoList", () => {
  it("TodoList keep the old list selections when there are new items", () => {
    const { getByTestId, rerender } = render(
      <TodoList items={["Apple", "Banana"]} preSelections={["Apple"]} />
    );
    // Apple is pre selected
    expect(getByTestId("Apple-checkbox")).toHaveProperty("checked", true);
    expect(getByTestId("Banana-checkbox")).toHaveProperty("checked", false);
    rerender(
      <TodoList items={["Apple", "Banana", "Cat"]} preSelections={["Cat"]} />
    );

    // check toogle click
    fireEvent.click(getByTestId("Banana-checkbox"));
    expect(getByTestId("Banana-checkbox")).toHaveProperty("checked", true);

    // Apple's selection is still there
    expect(getByTestId("Apple-checkbox")).toHaveProperty("checked", true);
    expect(getByTestId("Cat-checkbox")).toHaveProperty("checked", true);
  });
});
