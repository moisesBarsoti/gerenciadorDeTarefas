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
    },
  ]);

  const onTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isCompleted: !task.isCompleted };
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  // Add Tasks

  const addTask = (title, descrption) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      descrption,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div
      className="
    w-screen h-screen 
    bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900  
    text-white
    flex justify-center items-center flex-col
    font-Roboto
    "
    >
      <h1 className="text-3xl text-slate-100 font-bold p-6">
        Gerenciador de Tarefas
      </h1>
      <div className="flex gap-3 50rem:flex-col">
        <AddTasks addTask={addTask}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};
