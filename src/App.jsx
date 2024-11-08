import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Tasks } from "./components/Tasks";
import { AddTasks } from "./components/AddTasks";

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Estudar programação",
      descrption: "Estudar programação para se tornar dev Fullstack",
      isCompleted: false,
    }, 
    {
      id: uuid(),
      title: "Estudar programação",
      descrption: "Estudar programação para se tornar dev Fullstack",
      isCompleted: false,
    }, 
    {
      id: uuid(),
      title: "Estudar programação",
      descrption: "Estudar programação para se tornar dev Fullstack",
      isCompleted: false,
    }
  ]);

  return (
    <div
      className="
    w-screen h-screen 
    bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900  
    text-white
    flex justify-center items-center flex-col
    "
    >
      <h1 className="text-3xl text-slate-100 font-bold p-6">
        Gerenciador de Tarefas
      </h1>
      <AddTasks />
      <Tasks tasks={tasks}/>
    </div>
  );
};
