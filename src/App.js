import React, { useState, useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const saveData = (newTodos) => {
    localStorage.setItem("schindlers-todo-list", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("schindlers-todo-list")) {
      setTodos(JSON.parse(localStorage.getItem("schindlers-todo-list")));
    }
  }, []);

  const onAddTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    saveData(newTodos);
  };

  return (
    <div id="home" class="flex h-screen">
      <div class="container m-auto">
        <div class=" text-center" data-wow-delay=".2s">
          <h1 class="mb-3 text-3xl font-bold leading-snug text-black sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
            Simple Todo List
          </h1>
          <p class="mx-auto mb-10 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
            Just put in your Task and stop getting forgetable.
          </p>
          <input
            className="px-3 py-2 text-xs font-medium text-center border rounded-lg
            
             "
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />{" "}
          <button
            onClick={onAddTodo}
            type="button"
            class="px-3 py-2 text-xs font-medium text-center
            text-white bg-blue-700 rounded-lg hover:bg-blue-800 
             dark:bg-blue-600
            dark:hover:bg-blue-700 "
          >
            Add
          </button>{" "}
          <ul class="mb-10 pt-5 flex flex-wrap items-center justify-center">
            <li>
              {" "}
              <tbody id="table">
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <p>{todo.todo}</p>
                    <button
                      className="btn pt-2 btn-danger"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      {" "}
                      <p className="px-3 py-2 text-xs font-medium text-center font-light">
                        {" "}
                        Delete
                      </p>
                    </button>{" "}
                  </tr>
                ))}
              </tbody>
            </li>

            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
