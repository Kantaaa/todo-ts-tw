//import { ReactComponentElement as PlusIcon} from "react";

import { ChangeEvent, FormEvent } from "react";

export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => {
  return (
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
      <input
        className="flex-1 rounded shadow p-2 text-dark-grey mr-2"
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
      />
      <button
        className="rounded-xl fill-current text-white bg-green-500 p-2 font-serif font-extrabold"
        type="submit"
        aria-label="Add todo"
      >
        +
      </button>
    </form>
  );
};
