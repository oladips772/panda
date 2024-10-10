/** @format */
import React, { useEffect, useState } from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
import panda1 from "../images/panda1.png";
import toast from "react-hot-toast";

function Home() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const pandaId = userInfo?.pandaId;

  const [timeLeft, setTimeLeft] = useState(0); // Countdown timer
  const [isFarming, setIsFarming] = useState(false); // Farming state
  const [canClaim, setCanClaim] = useState(false);

  // Load the saved time from localStorage when the app loads
  useEffect(() => {
    const savedEndTime = localStorage.getItem("farmingEndTime");
    if (savedEndTime) {
      const now = Date.now();
      const remainingTime = Math.floor((savedEndTime - now) / 1000);
      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
        setIsFarming(true);
      } else {
        setCanClaim(true);
      }
    }
  }, []);

  // Start farming, set the timer for 4 hours (14400 seconds), and store end time in localStorage
  const startFarming = () => {
    const endTime = Date.now() + 50 * 1000; // Current time + 4 hours
    localStorage.setItem("farmingEndTime", endTime);
    setTimeLeft(50); // 4 hours in seconds
    setIsFarming(true);
    setCanClaim(false);
  };

  // Claim rewards and reset farming state
  const claimRewards = () => {
    setCanClaim(false);
    setIsFarming(false);
    localStorage.removeItem("farmingEndTime"); // Clear stored time
    toast.success("Rewards claimed!");
  };

  // Timer effect
  useEffect(() => {
    let timer = null;
    if (isFarming && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            setCanClaim(true);
            setIsFarming(false);
            localStorage.removeItem("farmingEndTime"); // Remove end time when countdown finishes
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup interval
  }, [timeLeft, isFarming]);

  // Helper function to format time into hours, minutes, and seconds
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  // ? copy pandaId
  const copyPandaId = () => {
    if (pandaId) {
      navigator.clipboard.writeText(pandaId);
      toast.success("copied");
    }
  };

  return (
    <div>
      <div className="p-3 h-[80vh] bg-[#0e0c16e0]">
        {/* top */}
        <div className="flex items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center" onClick={copyPandaId}>
            <span className="font-[500] text-[13px]">#{userInfo?.pandaId}</span>
            <LuCopy className="ml-2 font-[600] text-purple-600" size={19} />
          </div>
        </div>
        {/* coin Balance */}
        <div className="flex items-center justify-center p-2 mt-[38px]">
          <h1 className="text-[47px] text-purple-400 font-[700]">
            {userInfo?.coinBalance}
          </h1>
        </div>
        <div>
          <img
            src={panda1}
            alt=""
            className="h-[280px] object-contain mx-auto"
          />
        </div>
        {/* claim button */}
        <div className="flex items-center justify-center mx-2 h-[30%]">
          {!isFarming && !canClaim && (
            <button
              className="h-[55px] bg-purple-700 text-gray-100 w-full rounded"
              onClick={startFarming}
            >
              Start Farming
            </button>
          )}

          {isFarming && (
            <button className="h-[55px] bg-gray-700 text-gray-400 w-full rounded">
              <p>Claim in: {formatTime(timeLeft)}</p>
            </button>
          )}

          {canClaim && !isFarming && (
            <button
              className="h-[55px] bg-purple-700 text-gray-100 w-full rounded"
              onClick={claimRewards}
            >
              Claim Rewards
            </button>
          )}
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

export default Home;
