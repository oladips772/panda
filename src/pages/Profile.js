/** @format */
import React from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
import { BsPatchCheckFill } from "react-icons/bs";

function Profile() {
  return (
    <div>
      <div className="p-3 h-[100%]">
        {/* top */}
        <div className="flex items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center">
            <span className="font-[500]">#jhd867k</span>
            <LuCopy className="ml-2 font-[600] text-purple-600" size={19} />
          </div>
        </div>
      </div>
      {/* influencer badge */}

      <div className="flex items-center justify-center my-2 space-x-2 -mb-[2px]">
        <h1 className="text-gray-200 font-[600] text-lg">Influencer</h1>
        <BsPatchCheckFill className="text-purple-600" size={18} />
      </div>
      <p className="text-gray-300 text-center text-[12px]">
        You have earned the influencer badge
      </p>

      {/* frens */}
      <div className="mt-4 px-2">
        <p className="text-[17px] text-gray-200 mb-2 mx-2">Your Friends</p>
        {/* frens item */}
        <div className="flex items-center my-[10px]">
          <div className="flex items-center justify-center h-[35px] w-[35px] bg-purple-700 rounded-full mx-1">
            <p className="text-gray-200 font-[600] text-[18px]">K</p>
          </div>
          <span className="text-gray-200 ml-2 text-[17px] flex-1">
            Kyenret Kutwal
          </span>
          <span className="text-gray-200">300728</span>
        </div>
        <div className="flex items-center my-[10px]">
          <div className="flex items-center justify-center h-[35px] w-[35px] bg-purple-700 rounded-full mx-1">
            <p className="text-gray-200 font-[600] text-[18px]">K</p>
          </div>
          <span className="text-gray-200 ml-2 text-[17px] flex-1">
            Kyenret Kutwal
          </span>
          <span className="text-gray-200">300728</span>
        </div>
      </div>
      {/* referral button */}
      <div className="p-3">
        <button className="mt-8 text-gray-200 flex flex-row items-center justify-center bg-purple-800 rounded p-3 w-full">
          Copy Referral Link
          <LuCopy className="ml-2 font-[600] text-gray-200" size={19} />
        </button>
        <p className="text-gray-300 mt-1 text-sm">
          Invite a friend to earn 1,000 panda tokens
        </p>
      </div>

      <BottomTab />
    </div>
  );
}

export default Profile;
