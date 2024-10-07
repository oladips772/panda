/** @format */
import React from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";

function Earn() {
  return (
    <div className="">
      <div className="p-3 h-[80vh]">
        {/* top */}
        <div className="flex items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center">
            <span className="font-[500]">#jhd867k</span>
            <LuCopy className="ml-2 font-[600] text-purple-600" size={19} />
          </div>
        </div>
        {/* header */}
        <h1 className="text-gray-200 mt-3 font-[500] text-[19px]">
          Complete Tasks to earn more panda tokens.
        </h1>
        <p className="text-gray-400 text-[12px]">
          Completing tasks are mandatory for{" "}
          <span className="text-gray-300 font-[500]">airdrop</span>{" "}
          qualification.
        </p>
        <h1 className="text-gray-200 text-lg mt-6 font-[600]">Tasks</h1>
        {/* tasks div */}
        <div className="bg-[#1b172b] p-2 rounded mt-2">
          {/* task item */}
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[16px] text-gray-200 font-[500]">
                Subscribe To Our Telegram Channel
              </h1>
              <p className="text-gray-400 text-[12px]">
                Join our telegram channel to get 5000 tokens
              </p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[80px]">
              Start
            </button>
          </div>
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[16px] text-gray-200 font-[500]">
                Join To Our Youtube Channel
              </h1>
              <p className="text-gray-400 text-[12px]">
                Subscribe to our youtube channel to get 5000 tokens
              </p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[80px]">
              Start
            </button>
          </div>
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[16px] text-gray-200 font-[500]">
                Follow Our X (Twitter) Account
              </h1>
              <p className="text-gray-400 text-[12px]">
                Subscribe to our x account to get 5000 tokens
              </p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[80px]">
              Start
            </button>
          </div>
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[16px] text-gray-200 font-[500]">
                Watch youtube video
              </h1>
              <p className="text-gray-400 text-[12px]">
                Watch youtube video to get 2000 tokens
              </p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[80px]">
              Start
            </button>
          </div>
        </div>
      </div>

      <BottomTab />
    </div>
  );
}

export default Earn;
