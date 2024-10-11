/** @format */
import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";


function Task({ task }) {
  return (
    <div className="m-[10px] flex flex-row items-center justify-between border-b border-gray-700 pb-[7px]">
      <div>
        <h1 className="text-[13px] text-gray-50 font-[500]">{task?.title}</h1>
        <p className="text-gray-200 text-[11.5px] flex flex-row items-center">
          +{task?.reward}{" "}
          <img
            src={icon}
            alt=""
            className="h-[13px] w-[13px] object-contain mx-1"
          />{" "}
          tokens
        </p>
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
