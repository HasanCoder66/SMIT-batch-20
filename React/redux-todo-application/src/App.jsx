import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addTodo, deleteTodo, updateTodo } from "./features/todo/todoSlice.js";

const App = () => {
  const [input, setInput] = useState("");
  const [isEditTodo, setIsEditTodo] = useState(null);


  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todo.todos);

  console.log(todos);
  
  const toastHandler = (message) => {
    return toast(message);
  };


  const updateTodoHandler = () => {
    dispatch(updateTodo({
      id : isEditTodo,
      title : input
    }))
    setInput("")
    setIsEditTodo(null)
  }

  const addTodoHandler = () => {

    if (input.trim() == "") {
      return toastHandler("please enter a task!");
    }

    // edit todo -->
    if(isEditTodo !== null){
      return updateTodoHandler()
    }


    // add todo
    dispatch(
      addTodo({
        id: new Date().getTime(),
        title: input,
      }),
    );
    toastHandler("task added!");
    setInput("");
  };


  const editTodoHandler = (todo) => {
    
setIsEditTodo(todo.id)
setInput(todo.title)
  }

  const deleteTodoHandler = (id) => {
    console.log("delete todo is working!");
    
    dispatch(deleteTodo(id))
  }

  
  return (
    <div className="h-screen flex justify-center items-center bg-[#0f172a]">
      <div className="shadow-md rounded-2xl w-[450px] p-4 bg-[#1e293b]">
        {/* title */}
        <h1 className="text-2xl font-bold text-white">Todo Application</h1>

        {/* input area */}
        <div className="w-full  h-[45px] flex justify-between gap-3 mb-3 mt-3">
          <input
            type="text"
            placeholder="add your task"
            className="bg-[#0f172a] rounded-2xl text-white pl-3 w-[80%] h-[45px] outline-blue-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={addTodoHandler}
            className="cursor-pointer w-[100px] text-white bg-blue-600 rounded-2xl"
          >
            {isEditTodo ? "Update" : "Add"}
          </button>
        </div>

        {/* todos  */}
        <div>
          {todos && todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem
                deleteTodoHandler={deleteTodoHandler} 
                editTodoHandler={editTodoHandler}
                key={todo.id}
                todo={todo}
              />
            ))
          ) : (
            <p className="text-white text-center">No Todos</p>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;

const TodoItem = ({ todo, editTodoHandler, deleteTodoHandler }) => {
  return (
    <div className="flex justify-between p-4 mb-3 bg-[#0f172a] rounded-2xl">
      <h1 className="text-white">{todo.title}</h1>
      <div className="flex gap-4 text-white">
        <button className="text-green-400 cursor-pointer" onClick={() => editTodoHandler(todo)}>Edit</button>
        <button className="text-red-400 cursor-pointer" onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
      </div>
    </div>
  );
};
