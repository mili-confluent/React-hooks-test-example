import { useCallback, useState } from "react";
import { TodoList } from "./TodoList";

export default function App() {
  const [items, setItems] = useState(() => ["Apple", "Banana"]);
  const [inputText, setInputText] = useState("");
  const handleAddUndoItemClick = useCallback(() => {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }, [inputText]);

  return (
    <div className="App">
      <TodoList items={items} />
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button onClick={handleAddUndoItemClick}>Add item</button>
    </div>
  );
}
