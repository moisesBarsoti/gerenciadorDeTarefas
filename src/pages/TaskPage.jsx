import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";

export const TaskPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("descrption");

  const navigate = useNavigate();

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
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative w-80">
          <button
            className="absolute left-0 right-0 bottom-0 top-0 "
            title="Voltar ao início"
            onClick={() => navigate(-1)}
          >
            <IoChevronBackOutline />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold p-6">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
