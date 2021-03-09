import { useCallback, useState } from "react";

export const TodoList = ({ items }) => {
  const [selectionSet, setSelectionSet] = useState(() => new Set());
  const handleChange = useCallback((item, isChecked) => {
    setSelectionSet((prevSet) => {
      const newSet = new Set(prevSet);
      if (isChecked) {
        newSet.add(item);
      } else {
        newSet.delete(item);
      }
      return newSet;
    });
  }, []);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item}>
            <input
              data-testid={`${item}-checkbox`}
              checked={selectionSet.has(item)}
              onChange={(event) => handleChange(item, event.target.checked)}
              type="checkbox"
            ></input>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};
