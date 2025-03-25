"use client";
import { useState } from "react";

export const TodoList = () => {
  const [todo, setTodo] = useState<string>("");
  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <div>TODO 페이지 입니다.</div>
      <input value={todo} onChange={handleChangeTodo} />
    </>
  );
};
export default TodoList;
