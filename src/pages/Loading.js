/** @format */
import React, { useEffect } from "react";
import logo from "../images/Designer.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Loading() {
  const navigate = useNavigate();
  // Initialize the Telegram Web App
  window?.Telegram?.WebApp.init();

  // Extract tgWebAppStartParam from URL
  const query = new URLSearchParams(window.location.search);
  const startParam = query.get("tgWebAppStartParam");

  // Function to parse tgWebAppData from URL
  const parseTGWebAppData = (tgWebAppData) => {
    try {
      const decodedData = decodeURIComponent(tgWebAppData);
      const data = decodedData.match(/user=({.*?})/);
      if (data && data[1]) {
        return JSON.parse(decodeURIComponent(data[1]));
      }
      return null;
    } catch (error) {
      console.error("Failed to parse tgWebAppData:", error);
      return null;
    }
  };

  // Fallback if startParam is unavailable
  const tgWebAppData = query.get("tgWebAppData");
  const userData = tgWebAppData ? parseTGWebAppData(tgWebAppData) : null;

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userId = startParam || userData?.id;
        if (!userId) {
          console.log("No user information found");
          return;
        }

        // Fetch user profile using the userId (startParam or tgWebAppData)
        const { data } = await axios.get(
          `https://panda-backend-b67c.onrender.com/api/users/profile/${userId}`
        );
        console.log("User profile:", data);

        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/home");
      } catch (error) {
        console.log("Error fetching user profile:", error);
      }
    };

    getUserProfile();
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
