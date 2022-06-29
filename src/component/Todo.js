import React, { useState } from "react";

const Todo = () => {
  const [text1, setText1] = useState("Task1");
  const [text2, setText2] = useState("Task2");
  const [text3, setText3] = useState("Task3");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const toggleTodo1 = () => {
    setText1("");
    setText4("Task1");
  };

  const toggleTodo2 = () => {
    setText2("");
    setText5("Task2");
  };

  const toggleTodo3 = () => {
    setText3("");
    setText6("Task3");
  };
  const toggleTodo4 = () => {
    setText4("");
    setText7("Task 1 Finished");
  };

  const toggleTodo5 = () => {
    setText5("");
    setText8("Task 2 Finished");
  };

  const toggleTodo6 = () => {
    setText6("");
    setText9("Task 3 Finished");
  };

  const clearTask = () => {
    setText1("Task1");
    setText2("Task2");
    setText3("Task3");
    setText4("");
    setText5("");
    setText6("");
    setText7("");
    setText8("");
    setText9("");
  };
  const clearTask1 = () => {
    setText7("");
  };
  const clearTask2 = () => {
    setText8("");
  };
  const clearTask3 = () => {
    setText9("");
  };

  return (
    <>
      <div className="px-6 py-12 mx-auto">
        <h1 className="text-3xl font-bold text-center">Todo App</h1>

        <div className="flex flex-wrap">
          <div className="container w-1/3 mt-5 shadow-lg">
            <h2 className="my-3 text-2xl font-bold">Initial Stage</h2>
            <h2> {text1}</h2>
            <button
              onClick={toggleTodo1}
              className=" my-1 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Init Task
            </button>
            <h2> {text2}</h2>
            <button
              type="button"
              onClick={toggleTodo2}
              className="my-1 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Init Task
            </button>
            <h2>{text3}</h2>
            <button
              type="button"
              onClick={toggleTodo3}
              className="my-1 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Init Task
            </button>
          </div>

          <div className="container w-1/3 mt-5 shadow-lg">
            <h2 className="my-3 text-2xl font-bold">Todo App</h2>
            <h2> {text4}</h2>
            <button
              type="button"
              onClick={toggleTodo4}
              className="my-1 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Process
            </button>
            <h2> {text5}</h2>
            <button
              type="button"
              onClick={toggleTodo5}
              className="my-1 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Process
            </button>
            <h2>{text6}</h2>
            <button
              type="button"
              onClick={toggleTodo6}
              className="my-1 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Process
            </button>
          </div>
          <div className="container w-1/3 mt-5 shadow-lg px-8">
            <h2 className="my-3 text-2xl font-bold">Result</h2>

            <h2> {text7}</h2>
            <button
              type="button"
              onClick={clearTask1}
              className=" my-1 text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Clear
            </button>
            <h2> {text8}</h2>
            <button
              type="button"
              onClick={clearTask2}
              className=" my-1  text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Clear
            </button>
            <h2>{text9}</h2>
            <button
              type="button"
              onClick={clearTask3}
              className="  my-1 text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-md"
            >
              Clear
            </button>
          </div>
        </div>
        <div className="container text-center">
          <button
            type="button"
            onClick={clearTask}
            className="mt-8  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md item-center"
          >
            Reset All Task
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
