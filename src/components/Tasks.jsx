import { IoIosArrowForward } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Tasks = ({ tasks, onTaskClick, deleteTask }) => {
  const navigate = useNavigate();

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("descrption", task.descrption);
    navigate(`/task?${query.toString()}`);
  };

  return (
    <div>
      <ul className="space-y-4 p-6 h-full bg-slate-200 rounded-md shadow outline-none">
        <h1 className="text-xl flex justify-center text-black font-bold">
          Minhas Tarefas
        </h1>
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left p-2 rounded-md w-full ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 p-2 rounded-md transition-all duration-500 hover:bg-blue-400"
              title="Ver descrição"
            >
              <IoIosArrowForward />
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-slate-400 p-2 rounded-md transition-all duration-500 hover:bg-red-700"
              title="Deletar tarefa"
            >
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
