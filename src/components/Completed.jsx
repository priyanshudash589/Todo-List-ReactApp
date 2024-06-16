import React from "react";

const Completed = ({ completedTodos }) => {
  return (
    <div className="bg-black w-full h-[524px] flex items-center justify-center p-2">
      <ul className="bg-black w-full h-full flex flex-col items-center p-2 md:w-[10rem]">
        {completedTodos.map((item, index) => (
          <li
            key={index}
            className="bg-blue-100 lg:w-[80rem] text-green-700 p-3 h-[65px] mt-3 flex items-center justify-between md:w-[55rem] sm:w-[600px] w-[400px]"
          >
            <div className="flex flex-col">
              <h2>{item.title}</h2>
              <h4>{item.description}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
