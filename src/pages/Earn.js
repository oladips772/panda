/** @format */
import { useEffect, useState } from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
import { ScaleLoader } from "react-spinners";
import Task from "../components/Task";
import toast from "react-hot-toast";
import axios from "axios";

function Earn() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const pandaId = userInfo?.pandaId;

  // ? copy pandaId
  const copyPandaId = () => {
    if (pandaId) {
      navigator.clipboard.writeText(pandaId);
      toast.success("copied");
    }
  };

  // Function to handle task claiming
  const handleClaimTask = async (taskId) => {
    try {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error claiming task:", error);
    }
  };

  useEffect(() => {
    if (tasks?.length >= 1) {
      return;
    }
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(
          `https://panda-backend-rose.vercel.app/api/tasks/all`,
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTasks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [token, tasks?.length]);

  return (
    <div className="">
      <div className="p-2 h-[80vh]">
        {/* top */}
        <div className="flex m-1 items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center" onClick={copyPandaId}>
            <span className="font-[500] text-[13px]">#{userInfo?.pandaId}</span>
            <LuCopy className="ml-2 font-[600] text-purple-500" size={19} />
          </div>
        </div>
        {/* header */}
        <h1 className="text-gray-100 mt-3 font-[500] text-[15px]">
          Complete Tasks to earn more panda tokens.
        </h1>
        <h1 className="text-gray-100 text-lg mt-6 font-[600]">Tasks</h1>
        {/* tasks div */}
        {loading ? (
          <div className="flex items-center justify-center mt-6">
            <ScaleLoader height={25} color="#a855f7" />
          </div>
        ) : (
          <>
            {tasks.length < 1 ? (
              <div>
                <p className="text-center mx-auto my-4 font-[500] text-[14px] text-gray-100">
                  No tasks for now, check back later.
                </p>
              </div>
            ) : (
              <div className="bg-[#1b172b] p-1 rounded mt-2">
                {tasks?.map((task) => (
                  <Task task={task} key={task?._id} onClaim={handleClaimTask} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <BottomTab />
    </div>
  );
}

export default Earn;
