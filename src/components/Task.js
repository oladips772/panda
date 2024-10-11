/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";
import { ClockLoader } from "react-spinners";

function Task({ task }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showClaim, setShowClaim] = useState(false);

  const handleStartTask = () => {
    // Open the task link in a new window or appropriate app
    window.open(task?.taskLink, "_blank"); // Opens in a new tab
    // For React Native, use Linking:
    // Linking.openURL(task?.taskLink).catch((err) => console.error('Failed to open URL:', err));

    // Show loading animation
    setIsLoading(true);

    // Simulate 12-second loading before showing "Claim" button
    setTimeout(() => {
      setIsLoading(false);
      setShowClaim(true);
    }, 12000); // 12 seconds delay
  };

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
      {!showClaim ? (
        <button
          onClick={handleStartTask}
          className="p-[6px] flex items-center justify-center rounded-[20px] text-white bg-purple-800 w-[75px] text-[13.5px]"
        >
          {isLoading ? <ClockLoader size={20} color="#fff" /> : "Start"}
        </button>
      ) : (
        <button
          className="p-[6px] flex items-center justify-center rounded-[20px] text-white bg-green-500 w-[75px] text-[13.5px]"
          onClick={() => alert("Claiming reward")} // Replace with claim function
        >
          Claim
        </button>
      )}
    </div>
  );
}

export default Task;
