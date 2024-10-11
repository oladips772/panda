/** @format */
import React from "react";
import { RiHome3Fill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TbAirBalloon } from "react-icons/tb";
// import { FaUsersCog } from "react-icons/fa";

function BottomTab() {
  return (
    <div className="h-[57px] p-2 border-t border-gray-600 flex items-center justify-around bg-[#1b172b] fixed bottom-0 w-full max-w-[600px]">
      <NavLink
        to={"/home"}
        className={"flex flex-col items-center"}
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " gray",
          };
        }}
      >
        <RiHome3Fill size={23} />
        <p className="text-[12px]">Home</p>
      </NavLink>
      <NavLink
        to={"/earn"}
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " grey",
          };
        }}
        className={"flex flex-col items-center space-y-1 relative"}
      >
        <span className="h-[7px] w-[7px] rounded-full bg-red-600 -right-2 absolute"></span>
        <FaCoins size={20} className="-mb-2" />
        <p className="text-[12px]">Earn</p>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " grey",
          };
        }}
        to={"/profile"}
        className={"flex flex-col items-center space-y-1"}
      >
        <FaUser size={20} />
        <p className="text-[12px]">Profile</p>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "grey",
          };
        }}
        to={"/airdrop"}
        className={"flex flex-col items-center space-y-1"}
      >
        <TbAirBalloon size={27} className="-mt-1 -mb-1" />
        <p className="text-[12px]">Airdrop</p>
      </NavLink>
    </div>
  );
}

export default BottomTab;
