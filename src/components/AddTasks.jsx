import { useState } from "react";

export const AddTasks = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [descrption, setDescrption] = useState("");

  return (
    <div className="space-y-4 p-6 h-full bg-slate-200 rounded-md shadow outline-none mb-5">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        autoFocus
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-black border-black outline-none w-full p-2 rounded-md placeholder:font-bold"
      />
      <textarea
        type="text"
        placeholder="Digite a descrição da tarefa"
        required
        value={descrption}
        onChange={(e) => setDescrption(e.target.value)}
        className="text-black outline-none w-full p-2 h-20 resize-none rounded-md placeholder:font-bold"
      />
      <button
        className="
        flex justify-center text-black bg-slate-500 w-full py-2 rounded-md
        transition-all duration-500 hover:bg-slate-600
        "
        title="Adicionar Tarefa"
        onClick={() => {
          if (!title.trim() || !descrption.trim()) {
            return alert("Preencha o título e a descrição da tarefa")
          }
          addTask(title, descrption);
          setTitle("")
          setDescrption("")
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
};
