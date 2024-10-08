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
        <h1 className="text-gray-100 mt-3 font-[500] text-[15px]">
          Complete Tasks to earn more panda tokens.
        </h1>
        <p className="text-gray-400 text-[12px]">
          Completing tasks are mandatory for{" "}
          <span className="text-gray-300 font-[500]">airdrop</span>{" "}
          qualification.
        </p>
        <h1 className="text-gray-100 text-lg mt-6 font-[600]">Tasks</h1>
        {/* tasks div */}
        <div className="bg-[#1b172b] p-1 rounded mt-2">
          {/* task item */}
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[14px] text-gray-100 font-[500]">
                Subscribe To Our Telegram Channel
              </h1>
              <p className="text-gray-400 text-[11.5px]">+ 5000 tokens</p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[75px] text-[13.5px]">
              Start
            </button>
          </div>
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[14px] text-gray-100 font-[500]">
                Subscribe To Our Youtube Channel
              </h1>
              <p className="text-gray-400 text-[11.5px]">+ 5000 tokens</p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[75px] text-[13.5px]">
              Start
            </button>
          </div>
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[14px] text-gray-100 font-[500]">
                Follow Our X (Twitter) Account
              </h1>
              <p className="text-gray-400 text-[11.5px]">+ 5000 tokens</p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[75px] text-[13.5px]">
              Start
            </button>
          </div>
          <div className="my-3 flex flex-row items-center justify-between border-b border-gray-700 pb-[10px]">
            <div>
              <h1 className="text-[14px] text-gray-100 font-[500]">
                Watch youtube video
              </h1>
              <p className="text-gray-400 text-[11.5px]">+ 2000 tokens</p>
            </div>
            <button className="p-[6px] rounded-[20px] text-white bg-purple-800 w-[75px] text-[13.5px]">
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
