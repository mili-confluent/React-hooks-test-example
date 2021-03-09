import { useToggleSelectionSet } from "./useToggleSelectionSet";

export const TodoList = ({ items, preSelections }) => {
  const [selectionSet, toggleSelectionItem] = useToggleSelectionSet(
    preSelections
  );
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item}>
            <input
              data-testid={`${item}-checkbox`}
              checked={selectionSet.has(item)}
              onChange={(event) =>
                toggleSelectionItem(item, event.target.checked)
              }
              type="checkbox"
            ></input>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};
