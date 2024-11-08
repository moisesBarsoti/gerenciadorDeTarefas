export const Tasks = (props) => {
  return (
    <div>
      <ul className="space-y-4">
        {props.tasks.map((task) => (
          <li className="bg-slate-400 p-2 rounded-md">{task.title}</li>
        ))
        }
      </ul>
    </div>
  );
};
