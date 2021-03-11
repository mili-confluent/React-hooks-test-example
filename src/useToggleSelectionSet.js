import { useCallback, useEffect, useState } from "react";

export function useToggleSelectionSet(preSelections) {
  const [selectionSet, setSelectionSet] = useState(
    () => new Set(preSelections)
  );
  // toggle an item between selected and unselected
  const toggleSelectionItem = useCallback((item, isChecked) => {
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

  // keep the old selections and appending new preSelections
  useEffect(() => {
    setSelectionSet((prevSelectionSet) => {
      const newSelections = preSelections.filter(
        (item) => !prevSelectionSet.has(item)
      );
      if (newSelections.length > 0) {
        return new Set([...prevSelectionSet, ...newSelections]);
      }
      return prevSelectionSet;
    });
  }, [preSelections]);

  return [selectionSet, toggleSelectionItem];
}
