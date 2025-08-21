export default function TaskItem({ task, onDelete }) {
  return (
    <li className="flex justify-between items-center border-b p-2">
      <span>{task}</span>
      <button onClick={onDelete} className="text-red-500">❌</button>
    </li>
  );
}
