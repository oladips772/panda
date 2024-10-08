/** @format */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Task({ task }) {
  const navigate = useNavigate();

  return (
    <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
      <div>
        <h1 className="text-[14px] text-gray-100 font-[500]">{task?.title}</h1>
        <p className="text-gray-400 text-[11.5px]">+{task?.reward} tokens</p>
      </div>

      <Link
        className="p-[6px] flex items-center justify-center rounded-[20px] text-white bg-purple-800 w-[75px] text-[13.5px]"
        to={`${task?.taskLink}`}
      >
        Start
      </Link>
      {/* <button
        onClick={() => navigate(`${task?.taskLink}`)}
        className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[75px] text-[13.5px]"
      >
        Start
      </button> */}
    </div>
  );
}

export default Task;
