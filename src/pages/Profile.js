/** @format */
import React from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
// import { LuBadgeCheck } from "react-icons/lu";
// import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
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
      <div className="mt-3">
        {/* frens item */}
        <div className="flex items-center">
          <div className="flex items-center justify-center h-[37px] w-[37px] bg-purple-700 rounded-full mx-1">
            <p className="text-gray-200 font-[600] text-[20px]">K</p>
          </div>
          <span className="text-gray-200">Kyenret Kutwal</span>
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

export default Profile;
