//Import react
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
//Components
import { Row } from "./Row";
//Other
import { data } from "../todos";
import { AddTodo } from "./AddTodo";

//Types
type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export const Todos = () => {
  //states
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");
  const todosLength = todos.length;
  const hasTodos = todosLength > 0;
  const remainingTodos = todos.filter((todos) => !todos.isCompleted).length;

  //Handlers
  const handleAddTodo = (todo: Todo) => {
    const updateTodos = [...todos, todo];
    setTodos(updateTodos);
    setTask("");
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: v4(),
      task: task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section className="w-10/12 sm:w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTodo
        task={task}
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
      />
      <div className="h-10" />
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDeleteTodos={handleDeleteTodo}
          handleCheckTodos={handleCheckTodo}
        />
      ))}

      {!hasTodos && (
        <p className="mb-5 text-xl text-green-600 uppercase ">
          Anything you need to do?
        </p>
      )}
      {hasTodos && (
        <p className="mb-5 font-sans font-medium ">{`${remainingTodos} of ${todosLength}`}</p>
      )}
    </section>
  );
};
