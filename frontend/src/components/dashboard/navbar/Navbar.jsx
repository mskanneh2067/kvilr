import logo from "../../assets/logo.png";
import profile from "../../assets/msk.png";
import { FaSearch, FaExpand } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className="flex w-full p-5  items-center justify-between bg-[#002c38] text-white">
      <div className="flex items-center font-bold gap-3">
        <img src={logo} alt="" className="w-7" />
        <span>KANTARS VISION | ADMIN</span>
      </div>

      <div className="flex items-center gap-5">
        <FaSearch className="text-xl" />
        <AiOutlineAppstore className="text-xl" />
        <FaExpand className="text-xl" />
        <div className="relative">
          <MdOutlineNotificationsNone className="text-2xl" />
          <span className="absolute bg-red-500 w-4 h-4 rounded-full -top-[10px] -right-[10px] flex items-center justify-center text-[11px] text-white">
            1
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt=""
            className="w-7 h-7 rounded-full object-cover"
          />
          <span>msk</span>
        </div>

        <SlSettings className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
