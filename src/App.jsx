import { useState } from "react";
import Footer from "./components/Footer";
import Delete from "./assets/trash-bin.png";
import Complete from "./assets/correct.png";
import Completed from "./components/Completed";

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddTodo = () => {
    const newTodo = { title, description };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleCompletedTask = (index) => {
    const completedTask = todos.find((_, todoIndex) => todoIndex === index);
    setCompletedTodos([...completedTodos, completedTask]);
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
                
      <div className="bg-lime-200 w-full h-[350px] flex flex-row justify-center gap-4 items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 md:flex-col sm:flex-col ">
          <input
            type="text"
            className="bg-white text-emerald-950 text-center w-[500px] h-[50px] rounded-lg outline-none shadow-lg"
            placeholder="Enter the Task Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="bg-white text-red-400 text-center w-[500px] h-[50px] rounded-lg outline-none shadow-lg"
            placeholder="Enter the Task Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            className="bg-black text-white p-2 rounded-3xl w-[8rem] shadow-md"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
          <button
            className="bg-green-300 text-black p-2 rounded-3xl w-[8rem] shadow-md"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted ? "Completed" : "Task Active"}
          </button>
        </div>
      </div>

      <div className="bg-black w-full h-[524px] flex items-center p-2">
        {showCompleted ? (
          <Completed completedTodos={completedTodos} />
        ) : (
          <ul className="bg-black w-full h-full flex flex-col items-center p-2 md:flex-col">
            {todos.map((item, index) => (
              <li
                key={index}
                className="bg-blue-100 lg:w-[80rem] text-green-700 p-3 h-[65px] mt-3 flex items-center justify-between md:w-[55rem] sm:w-[600px] w-[400px]"
              >
                <div className="flex flex-col">
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                </div>
                <div className="flex gap-2">
                  <img
                    src={Complete}
                    alt=""
                    className="w-9 h-9 cursor-pointer rounded-full"
                    onClick={() => handleCompletedTask(index)}
                  />
                  <img
                    src={Delete}
                    alt=""
                    className="w-9 h-9 cursor-pointer rounded-full"
                    onClick={() => handleDeleteTask(index)}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
