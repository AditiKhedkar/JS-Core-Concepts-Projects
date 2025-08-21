import { useMemo } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  const sortedTasks = useMemo(() => [...tasks].sort(), [tasks]);

  return (
    <ul className="p-2">
      {sortedTasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}
