/** @format */
import React, { useState } from "react";
import icon from "../images/icon.png";
import { BeatLoader, ClockLoader } from "react-spinners";
import axios from "axios";
import toast from "react-hot-toast";

function Task({ task, onClaim }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [showClaim, setShowClaim] = useState(false);
  const [claiming, setClaiming] = useState(false);

  const handleStartTask = () => {
    window.open(task?.taskLink, "_blank");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowClaim(true);
    }, 10000);
  };

  const handleClaimReward = async () => {
    try {
      setClaiming(true);
      const { data } = await axios.post(
        `https://panda-backend-b67c.onrender.com/api/tasks/complete/${task?._id}`,
        {},
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("coinBalance", JSON.stringify(data));
      toast.success("Rewards claimed");
      setClaiming(false);
      onClaim(task._id);
    } catch (error) {
      console.error("Error claiming reward:", error);
      setClaiming(false);
    }
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
          {isLoading ? <ClockLoader size={19} color="#fff" /> : "Start"}
        </button>
      ) : (
        <button
          onClick={handleClaimReward}
          className="p-[6px] flex items-center justify-center rounded-[20px] h-[35px] text-white bg-green-700 w-[75px] text-[13.5px]"
        >
          {claiming ? <BeatLoader size={7} color="#fff" /> : "Claim"}
        </button>
      )}
    </div>
  );
}

export default Task;
