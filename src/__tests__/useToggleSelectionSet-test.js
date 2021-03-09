import { renderHook, act } from "@testing-library/react-hooks/dom/pure";
import { useToggleSelectionSet } from "../useToggleSelectionSet";

describe("useToggleSelectionSet", () => {
  it("useToggleSelectionSet keep the old selections when there are new preSelections", () => {
    const hook = renderHook(
      (preSelections) => useToggleSelectionSet(preSelections),
      { initialProps: ["Apple"] }
    );
    let [selectionSet, handleToggleItem] = hook.result.current;
    // Apple is pre selected
    expect(selectionSet).toMatchObject(new Set(["Apple"]));

    // check toogle
    act(() => {
      handleToggleItem("Banana", true);
    });
    [selectionSet] = hook.result.current;
    expect(selectionSet).toMatchObject(new Set(["Apple", "Banana"]));

    // rerender with new props
    hook.rerender(["Cat"]);
    [selectionSet] = hook.result.current;
    // Apple's selection is still there
    expect(selectionSet).toMatchObject(new Set(["Apple", "Banana", "Cat"]));
  });
});
