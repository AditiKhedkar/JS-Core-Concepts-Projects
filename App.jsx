import { useReducer, useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD": return [...tasks, action.task];
    case "DELETE": return tasks.filter((_, i) => i !== action.index);
    default: return tasks;
  }
}

function AppContent() {
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", []);
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);
  const { toggleTheme } = useContext(ThemeContext);

  const addTask = (task) => {
    const updated = [...tasks, task];
    dispatch({ type: "ADD", task });
    setStoredTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    dispatch({ type: "DELETE", index });
    setStoredTasks(updated);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <button onClick={toggleTheme} className="mb-2 bg-gray-300 px-2 rounded">
        Toggle Theme
      </button>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
