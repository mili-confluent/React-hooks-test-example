import { useCallback, useState } from "react";
import { TodoList } from "./TodoList";

export default function App() {
  const [items, setItems] = useState(() => ["Apple", "Banana"]);
  const [preSelections, setPreSelections] = useState(() => ["Apple"]);
  const [inputText, setInputText] = useState("");
  const handleAddUndoItemClick = useCallback(() => {
    if (inputText !== "" && !items.includes(inputText)) {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText("");
    }
  }, [inputText, items]);

  const handleAddDoneItemClick = useCallback(() => {
    if (inputText !== "" && !items.includes(inputText)) {
      setItems((prevItems) => [...prevItems, inputText]);
      setPreSelections((prevPreSelections) => [inputText]);
      setInputText("");
    }
  }, [inputText, items]);

  return (
    <div className="App">
      <TodoList items={items} preSelections={preSelections} />
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button onClick={handleAddUndoItemClick}>Add a todo item</button>
      <button onClick={handleAddDoneItemClick}>Add a done item</button>
    </div>
  );
}
