import { data } from "../todos";

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTodos: (id: string) => void;
  handleCheckTodos: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id },
  handleDeleteTodos,
  handleCheckTodos,
}: TodoProps) => {
  return (
    <div
      className={`
      
      flex w-full p-4 mb-2 justify-between items-center
    ${isCompleted ? "bg-gray-400" : "bg-green-300"}
    
    `}
    >
      <p
        className={` ml-2 text-xl font-sans font-medium
        ${isCompleted ? "text-white line-through" : "text-gray-800"}
        `}
      >
        {task}
      </p>
      <div className="w-1/4 flex justify-between items-center mr-2">
        <button
          aria-label="Delete"
          className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded"
          onClick={() => handleDeleteTodos(id)}
        >
          X
        </button>
        <input
          className="h-7 w-7 form-checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodos(id)}
        />
      </div>
    </div>
  );
};
