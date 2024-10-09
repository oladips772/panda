/** @format */
import React, { useEffect } from "react";
import logo from "../images/Designer.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const startapp = searchParams.get("startapp"); // Referral code

  const startParam =
    window?.Telegram?.WebApp?.initDataUnsafe?.start_param || startapp;
  const userData = window?.Telegram?.WebApp?.initDataUnsafe?.user;

  useEffect(() => {
    const handleUserAccount = async () => {
      try {
        if (!userData?.id || !startParam) {
          console.log("Missing user data or referral code.");
          return;
        }

        // Send user data and referral code to the backend
        const response = await axios.post(
          "https://panda-backend-b67c.onrender.com/api/users/check-or-create",
          {
            userId: userData.id,
            firstName: userData.first_name,
            lastName: userData.last_name,
            referralCode: startParam,
          }
        );

        const userInfo = response.data;
        console.log("User info:", userInfo);

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate("/home");
      } catch (error) {
        console.log("Error handling user account:", error);
      }
    };

    handleUserAccount();
  }, [startParam, userData, navigate]);

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
