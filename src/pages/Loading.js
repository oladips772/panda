/** @format */
import React, { useEffect } from "react";
import logo from "../images/Designer.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Loading() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const pandaId = query.get("pandaId");
  console.log(pandaId);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data } = await axios.get(
          `https://panda-backend-b67c.onrender.com/api/users/profile/${pandaId}`
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    };

    getUserProfile();
  }, [pandaId]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/home");
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="relative">
      <img src={logo} className="h-full w-full object-cover" alt="" />
      <div className="bg-[#0000001f] absolute top-0 left-0 right-0 z-99 bottom-0">
        <h1 className="text-white font-[600] text-[26px] text-center mt-[33px]">
          Panda Token Farm
        </h1>
        <p className="text-white text-[12px] text-center">
          Build your coin balance and brace up for upcoming airdrop.
        </p>
        <p className="text-white text-center absolute bottom-6 left-[42%] animate-pulse">
          loading...
        </p>
      </div>
    </div>
  );
}

export default Loading;
