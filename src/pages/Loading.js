/** @format */
import React, { useEffect } from "react";
import logo from "../images/Designer.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to parse the URL fragment and extract Telegram WebApp data
  const parseTelegramData = () => {
    // Extract the hash fragment from the URL
    const hash = location.hash;

    if (hash) {
      try {
        // Create a URLSearchParams instance from the hash fragment (removing the '#')
        const searchParams = new URLSearchParams(hash.substring(1));

        // Extract the tgWebAppData parameter from the hash fragment
        const tgWebAppData = searchParams.get("tgWebAppData");

        if (tgWebAppData) {
          // Decode the URL-encoded string
          const decodedData = decodeURIComponent(tgWebAppData);

          // Extract the 'user' object from the decoded data
          const userMatch = decodedData.match(/user%3D(.+?)%26/);
          if (userMatch && userMatch[1]) {
            const userDataString = decodeURIComponent(userMatch[1]);
            const userData = JSON.parse(userDataString);
            return { userData, searchParams };
          }
        }
      } catch (error) {
        console.error("Error parsing Telegram WebApp data:", error);
      }
    }
    return { userData: null, searchParams: null };
  };

  // Extract user data and searchParams from the hash
  const { userData, searchParams } = parseTelegramData();

  // Extract referral code (start_param) from Telegram WebApp or URL
  const startParam =
    searchParams?.get("startapp") ||
    window.Telegram?.WebApp?.initDataUnsafe?.start_param;

  // Debugging logs to ensure correct extraction
  console.log("startParam:", startParam); // Log the start_param/referral code
  console.log("userData:", userData); // Log the Telegram user data

  useEffect(() => {
    const handleUserAccount = async () => {
      try {
        // Check if userData and startParam are available
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

        // Store the user info in localStorage and navigate to home
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate("/home");
      } catch (error) {
        console.log("Error handling user account:", error);
      }
    };

    // Only execute if we have both user data and referral code
    if (userData || startParam) {
      handleUserAccount();
    }
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
