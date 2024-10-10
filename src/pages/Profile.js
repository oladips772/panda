/** @format */
import React, { useEffect } from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
import { BsPatchCheckFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { GetFriends } from "../redux/actions/TaskAction";
import { ScaleLoader } from "react-spinners";

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const refCode = userInfo?.referralCode;
  const pandaId = userInfo?.pandaId;
  const refLink = `https://t.me/Panda_tokenfarmbot/PandaTokenFarm?startapp=${refCode}`;
  const dispatch = useDispatch();
  const { loading, frens } = useSelector((state) => state.fetchFrens);

  useEffect(() => {
    if (frens?.length) {
      return;
    }
    dispatch(GetFriends());
  }, [dispatch]);

  // ? copy referral link
  const copyToClipboard = () => {
    if (refCode) {
      navigator.clipboard.writeText(refLink);
      toast.success("copied");
    }
  };

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
      <div className="p-3 h-[100%]">
        {/* top */}
        <div className="flex items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center" onClick={copyPandaId}>
            <span className="font-[500] text-[13px]">#{userInfo?.pandaId}</span>
            <LuCopy className="ml-2 font-[600] text-purple-500" size={19} />
          </div>
        </div>
      </div>

      {/* influencer badge */}
      {userInfo?.isInfluencer && (
        <>
          <div className="flex items-center justify-center my-2 space-x-1 -mb-[2px]">
            <h1 className="text-gray-200 font-[600] text-lg">Influencer</h1>
            <BsPatchCheckFill className="text-purple-500" size={17} />
          </div>
          <p className="text-gray-300 text-center text-[12px]">
            You have earned the influencer badge
          </p>
        </>
      )}
      {/* list friends */}
      {loading ? (
        <div className="flex items-center justify-center mt-6">
          <ScaleLoader height={25} color="#a855f7" />
        </div>
      ) : (
        <>
          {frens?.length >= 1 ? (
            <>
              <p className="text-[16px] text-gray-200 mt-4 mx-[10px]">
                Your Friends
              </p>
              {frens?.map((fren, index) => (
                <div className="mt-[18px] px-2" key={index}>
                  {/* frens item */}
                  <div className="flex items-center my-[12px]">
                    <div className="flex items-center justify-center h-[35px] w-[35px] bg-purple-700 rounded-full mx-1">
                      <p className="text-gray-200 font-[600] text-[18px]">
                        {fren?.name?.slice(0, 1)}
                      </p>
                    </div>
                    <span className="text-gray-200 ml-2 text-[16px] flex-1">
                      {fren?.name}
                    </span>
                    <span className="text-gray-200 text-[12px] font-[600]">
                      +1,000
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>
              <h1 className="text-gray-200 text-[16px] text-center my-6">
                You have not invited anyone yet..
              </h1>
            </div>
          )}
        </>
      )}

      {/* frens */}

      {/* referral button */}
      <div className="p-3">
        <button
          onClick={copyToClipboard}
          className="mt-8 text-gray-200 flex flex-row items-center justify-center bg-purple-800 rounded p-3 w-full"
        >
          Copy Referral Link
          <LuCopy className="ml-2 font-[600] text-gray-200" size={19} />
        </button>
        <p className="text-gray-300 mt-1 text-[12px]">
          Invite a friend to earn 1,000 panda tokens
        </p>
      </div>

      <BottomTab />
    </div>
  );
}

export default Profile;
