/** @format */
import React, { useEffect, useState } from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
import panda1 from "../images/panda1.png";
import icon from "../images/icon.png";
import panda2 from "../images/icon2.png";
import toast from "react-hot-toast";
import axios from "axios";

function Home() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const coinBalance = JSON.parse(localStorage.getItem("coinBalance"));
  const pandaId = userInfo?.pandaId;
  const token = JSON.parse(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

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
  const claimRewards = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://panda-backend-b67c.onrender.com/api/users/claim-coins",
        {}, // Assuming the body is empty for this request
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token as Bearer token
          },
        }
      );
      localStorage.setItem("coinBalance", JSON.stringify(data));
      setLoading(false);
      setCanClaim(false);
      setIsFarming(false);
      localStorage.removeItem("farmingEndTime"); // Clear stored time
      toast.success("Rewards claimed!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
      <div className="p-3 h-[100vh] bg-[#0e0c16e0]">
        {/* top */}
        <div className="flex items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center" onClick={copyPandaId}>
            <span className="font-[500] text-[13px]">#{userInfo?.pandaId}</span>

            <LuCopy className="ml-2 font-[600] text-purple-600" size={19} />
          </div>
        </div>
        {/* coin Balance */}
        <div className="flex items-center flex-col justify-center p-2 mt-[28px]">
          <p className="text-purple-400 text-[16px] -mb-[6px] font-[500] ">
            $PTFM
          </p>
          <h1 className="text-[36px] text-purple-300 font-[700] flex flex-row items-center">
            {/* <TbCoins color="#d8b4fe" size={25} className="mr-[6px]" />{" "} */}
            <img
              src={icon}
              alt=""
              className="h-[27px] w-[27px] object-contain mr-2"
            />
            {coinBalance?.toLocaleString()}
          </h1>
        </div>
        <div>
          <img
            src={panda2}
            alt="Panda"
            className="h-[220px] mx-auto mt-8"
          />
        </div>
        {/* claim button */}
        <div className="flex items-center justify-center mx-2 h-[30%]">
          {!isFarming && !canClaim && (
            <button
              className="h-[53px] bg-purple-800 font-[500] text-[14.5px] text-gray-100 w-full rounded-[8px]"
              onClick={startFarming}
            >
              Start Farming
            </button>
          )}

          {isFarming && (
            <button
              disabled
              className="h-[53px] bg-gray-700 font-[500] text-gray-300 text-[14.5px] w-full rounded-[8px]"
            >
              <p>Claim in: {formatTime(timeLeft)}</p>
            </button>
          )}

          {canClaim && !isFarming && (
            <button
              className="h-[53px] bg-purple-800 flex flex-row items-center justify-center font-[500] text-gray-200 text-[14.5px] w-full rounded-[8px]"
              onClick={claimRewards}
              disabled={loading}
            >
              {loading ? (
                "Claiming.."
              ) : (
                <>
                  Claim 3,000
                  <img
                    src={icon}
                    alt=""
                    className="h-[17px] w-[17px] object-contain ml-1 -mt-[1px]"
                  />
                </>
              )}
            </button>
          )}
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

export default Home;
