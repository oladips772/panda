/** @format */
import { useEffect } from "react";
import BottomTab from "../components/BottomTab";
import { LuCopy } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { GetTasks } from "../redux/actions/TaskAction";
import { ScaleLoader } from "react-spinners";
import Task from "../components/Task";
import toast from "react-hot-toast";

function Earn() {
  const dispatch = useDispatch();
  const { loading, tasks } = useSelector((state) => state.fetchTasks);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const pandaId = userInfo?.pandaId;

  // ? copy pandaId
  const copyPandaId = () => {
    if (pandaId) {
      navigator.clipboard.writeText(pandaId);
      toast.success("copied");
    }
  };

  useEffect(() => {
    if (tasks?.length) {
      return;
    }
    dispatch(GetTasks());
  }, [dispatch]);

  return (
    <div className="">
      <div className="p-3 h-[80vh]">
        {/* top */}
        <div className="flex items-center text-white bg-[#1b172b] p-[10px] rounded justify-between">
          <h1 className="font-[600] text-[13px]">Panda User ID:</h1>
          <div className="flex items-center" onClick={copyPandaId}>
            <span className="font-[500] text-[13px]">#{userInfo?.pandaId}</span>
            <LuCopy className="ml-2 font-[600] text-purple-600" size={19} />
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
          <div className="bg-[#1b172b] p-2 rounded mt-2">
            {/* task item */}
            {tasks?.map((task, index) => (
              <Task task={task} key={index} />
            ))}
          </div>
        )}
      </div>

      <BottomTab />
    </div>
  );
}

export default Earn;
