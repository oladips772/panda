/** @format */
import React from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";

function Airdrop() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      <div className=" p-3">
        {/* top */}
        <div className="flex items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center">
            <span className="font-[500] text-[13px]">#{userInfo?.pandaId}</span>
            <LuCopy className="ml-2 font-[600] text-purple-600" size={19} />
          </div>
        </div>
        {/* info */}
        <h1 className="text-gray-200 font-[600] text-lg text-center mt-6 mb-1">
          Airdrop Info:
        </h1>
        <p className="text-gray-200 text-[13px]">
          Airdrop is the distribution of tokens to players. Currently we are in
          the farming session where players will farm and participate in tasks
          and build their coin balance and and get ready for the coming airdrop.
        </p>
        <p className="text-gray-200 text-[13px] mt-2">
          Upcoming airdrop activities / preparations and news will be announced
          on our official handles.
        </p>
        <h1 className="text-gray-200 font-[600] text-lg text-center mt-6 mb-1">
          Requirements:
        </h1>
        <p className="text-gray-200 text-[13px]">
          Participation in the coming airdrop are based on these 3 factors:
        </p>
        <ul>
          <li className="text-gray-200 mt-2 ml-2 text-[12.8px]">
            <span className="text-gray-100 font-[500]">Coin Balance: </span>{" "}
            Players should accumulate enough coin balance as the tokens they
            will receive will be equivalent to their coin balance.
          </li>
          <li className="text-gray-200 mt-2 ml-2 text-[12.8px]">
            <span className="text-gray-100 font-[500]">Tasks: </span> Completing
            tasks are mandatory for airdrop qualification , as they also serve
            as means for players to earn more tokens along the way.
          </li>
          <li className="text-gray-200 mt-2 ml-2 text-[12.8px]">
            <span className="text-gray-100 font-[500]">Friends: </span> A strong
            community can only be built by inviting more people to participate
            and get ready for the airdrop and a successful airdrop can't be
            achieved without the power of a large community. So invite friends
            and more frens to join us.
          </li>
        </ul>
        <h1 className="text-gray-100 font-[600] text-lg text-center mt-6 mb-1">
          Key Takeaways:
        </h1>
        <ul className="mb-20">
          <li className="text-gray-200 mt-2 ml-2 text-[12.8px] text-start">
            Ability to connect wallet will be available soon.
          </li>
          <ul>
            <li className="text-gray-200 mt-2 ml-2 text-[12.8px] text-start">
              The Season 1 plan is to onboard a total number of 40 Million
              Players, after this has been achieved , ability for new users
              registration will be disabled , this is to ensure a perfect and
              well planned tokenomics.
            </li>
          </ul>
        </ul>
      </div>
      <BottomTab />
    </div>
  );
}

export default Airdrop;
