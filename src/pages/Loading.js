/** @format */
import React, { useEffect } from "react";
import logo from "../images/Designer.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to parse URL hash and extract Telegram WebApp data
  const parseTelegramDataFromHash = () => {
    const hash = location.hash; // Get the URL hash (after #)

    console.log("Hash found in URL:", hash); // Log the hash for debugging

    if (hash) {
      try {
        // Create URLSearchParams from the hash, removing the first character (#)
        const searchParams = new URLSearchParams(hash.substring(1));

        // Extract tgWebAppData from the hash parameters
        const tgWebAppData = searchParams.get("tgWebAppData");

        console.log("tgWebAppData from hash:", tgWebAppData); // Log for debugging

        if (tgWebAppData) {
          // Decode the URL-encoded data
          const decodedData = decodeURIComponent(tgWebAppData);

          console.log("Decoded tgWebAppData:", decodedData); // Log the decoded data

          // Use URLSearchParams again on the decoded string to extract individual parameters
          const decodedParams = new URLSearchParams(decodedData);

          // Extract the 'user' object from the decodedParams
          const userString = decodedParams.get("user");
          const userData = userString ? JSON.parse(userString) : null;

          console.log("Extracted user data:", userData); // Log user data
          return userData;
        }
      } catch (error) {
        console.error("Error parsing Telegram WebApp data:", error);
      }
    }
    return null;
  };

  // Function to parse the start_param from the location.search
  const getStartParamFromSearch = () => {
    const search = location.search; // Get the URL query parameters (after ?)
    const searchParams = new URLSearchParams(search);
    const startParam = searchParams.get("tgWebAppStartParam");
    console.log("Extracted start_param from search:", startParam);
    return startParam;
  };

  // Extract user data from the hash and start_param from search
  const userData = parseTelegramDataFromHash();
  const startParam = getStartParamFromSearch();

  // Debugging logs to ensure correct extraction
  console.log("startParam (referral code):", startParam); // Log the referral code
  console.log("userData (Telegram user data):", userData); // Log the user data

  useEffect(() => {
    const handleUserAccount = async () => {
      try {
        // Send user data and referral code to the backend
        const response = await axios.post(
          "https://panda-backend-b67c.onrender.com/api/users/check-or-create",
          {
            userId: userData?.id,
            firstName: userData?.first_name,
            lastName: userData?.last_name,
            referralCode: startParam,
          }
        );

        const userInfo = response.data;
        console.log("User info from backend:", userInfo); // Log the response data

        // Store the user info in localStorage and navigate to home
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("token", JSON.stringify(userInfo?.token));
        navigate("/home");
      } catch (error) {
        console.log("Error handling user account:", error);
      }
    };

    // Execute only if both user data and referral code are available
    if (userData || startParam) {
      handleUserAccount();
    }
  }, [startParam, userData, navigate]);

  return (
    <div className="relative">
      <img src={logo} className="h-[100vh] w-full object-cover" alt="" />
      <div className="bg-[#0000001f] absolute top-0 left-0 right-0 z-99 bottom-0">
        <h1 className="text-white font-[600] text-[26px] text-center mt-[33px]">
          Panda Token Farm
        </h1>
        <p className="text-white text-[11.5px] font-[600] text-center">
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
