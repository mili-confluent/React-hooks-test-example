import { useCallback, useState } from "react";
import { TodoList } from "./TodoList";

export default function App() {
  const [items, setItems] = useState(() => ["Apple", "Banana"]);
  const [preSelections, setPreSelections] = useState(() => ["Apple"]);
  const [inputText, setInputText] = useState("");
  const handleAddUndoItemClick = useCallback(() => {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }, [inputText]);

  const handleAddDoneItemClick = useCallback(() => {
    setItems((prevItems) => [...prevItems, inputText]);
    setPreSelections((prevPreSelections) => [inputText]);
    setInputText("");
  }, [inputText]);

  return (
    <div className="App">
      <TodoList items={items} preSelections={preSelections} />
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button onClick={handleAddUndoItemClick}>Add Undo item</button>
      <button onClick={handleAddDoneItemClick}>Add Done item</button>
    </div>
  );
}
