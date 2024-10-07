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
    <div className="h-[60px] p-2 border-t border-gray-600 flex items-center justify-around bg-[#1b172b] fixed bottom-0 w-full max-w-[600px]">
      <NavLink
        to={"/home"}
        className={"flex flex-col items-center"}
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " gray",
          };
        }}
      >
        <RiHome3Fill size={24} />
        <p className="text-[12.5px]">Home</p>
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
        <span className="h-[7px] w-[7px] rounded-full bg-red-500 -right-2 absolute"></span>
        <FaCoins size={21} />
        <p className="text-[12.5px]">Earn</p>
      </NavLink>
      {/* <NavLink
        to={"/influencers"}
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " grey",
          };
        }}
        className={"flex flex-col items-center space-y-1"}
      >
        <FaUsersCog size={28} className="-mb-1 -mt-1" />
        <p className="text-[12.5px]">Influencers</p>
      </NavLink> */}
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " grey",
          };
        }}
        to={"/profile"}
        className={"flex flex-col items-center space-y-1"}
      >
        <FaUser size={21} />
        <p className="text-[12.5px]">Profile</p>
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
        <TbAirBalloon size={28} className="-mt-1 -mb-1" />
        <p className="text-[12.5px]">Airdrop</p>
      </NavLink>
    </div>
  );
}

export default BottomTab;
