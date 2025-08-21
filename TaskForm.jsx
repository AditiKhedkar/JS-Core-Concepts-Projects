import { useState, useRef, useEffect, useCallback } from "react";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask("");
  }, [task, onAdd]);

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-2">
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="border rounded p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-3 py-1">
        Add
      </button>
    </form>
  );
}
