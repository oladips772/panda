/** @format */
import React from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
import panda1 from "../images/panda1.png";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const pandaId = userInfo?.pandaId;

  // ? copy pandaId
  const copyPandaId = () => {
    if (pandaId) {
      navigator.clipboard.writeText(pandaId);
      toast.success("copied");
    }
  };

  return (
    <div>
      <Toaster />
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
          <button className="h-[50px] w-full bg-purple-800 text-[17px] text-gray-100 font-[500] rounded-lg">
            Claim 3000
          </button>
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

export default Home;
