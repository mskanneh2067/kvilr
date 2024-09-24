// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../features/auth/authsSlice";
import profile from "../../assets/images/src/profile/profile.jpeg";
import { logOut } from "../../features/users/userSlice";
import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaUserPlus,
  FaGlobe,
} from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import { FiDollarSign } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";

import Cart from "../cart/Cart";
import { useState } from "react";

const Top = () => {
  const [account, setAccount] = useState(false);
  const { userInfo } = useSelector((state) => state.user);

  const toggleAccount = () => {
    setAccount(!account);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logOut());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="z-105 w-full  fixed top-0 md:flex  text-white bg-[#002c38] h-16 ">
      {/* first */}
      <div className="w-full grid grid-cols-3 place-items-center py-2   ">
        <Link to="/">
          <div className="flex  items-center cursor-pointer ">
            <img src={logo} alt="" className="w-10 lg:w-20" />
          </div>
        </Link>

        <div className="flex flex-col items-center cursor-pointer ">
          <FaHeadset className="text-sm lg:text-xl" />
          <h1 className="text-[10px] lg:text-sm font-bold">Support</h1>
        </div>

        <div className="flex flex-col items-center cursor-pointer  ">
          <FaSearch className="text-sm lg:text-xl" />
          <h1 className="text-[10px] lg:text-sm font-bold">Search</h1>
        </div>
      </div>
      {/* second */}
      {userInfo ? (
        <div className="w-full grid grid-cols-4 place-items-center  text-[#002c38] py-2 bg-white">
          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <FiDollarSign className="text-sm lg:text-xl" />
            <h1 className="text-[10px] lg:text-sm font-bold">USD</h1>
          </div>

          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <FaGlobe className="text-sm lg:text-xl" />
            <h1 className="text-[10px] lg:text-sm font-bold">En</h1>
          </div>

          <div className="relative flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <div
              className="flex flex-col items-center justify-center "
              onClick={toggleAccount}
            >
              <img src={profile} alt="" className="w-6 h-6 object-contain" />

              <div className="flex items-center justify-evenly ">
                <div className="text-sm font-normal ">Me</div>
                <RiArrowDownSFill className="text-lg" />
              </div>
            </div>

            {account && (
              <div className="z-106  absolute top-12 md:top-9  lg:top-8 xl:top-10 min-w-[227px]   rounded-sm border shadow-lg text-[#002c38] bg-white p-3 ">
                <h1 className="font-normal ">{userInfo.name}</h1>
                <Link to="/dashboard">
                  <div className="text-md font-bold py-3 px-1">Dashboard</div>
                </Link>

                <Link to="/profile">
                  <div className="text-md font-bold py-3 px-1">Profile</div>
                </Link>

                <div
                  className="text-md font-bold py-3 px-1"
                  onClick={logoutHandler}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
          <div className="relative flex items-center  space-x-1 md:space-x-1 cursor-pointer group">
            <FaShoppingCart className="text-sm md:text-lg" />
            <p className="text-sm md:text-xl font-medium">$0.00</p>
            <RiArrowDownSFill className="text-lg" />
            <Cart />
          </div>
        </div>
      ) : (
        <div className="relative w-full grid grid-cols-5 place-items-center  text-[#002c38] py-2 bg-white">
          <Link to="/login">
            <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer">
              <FaUser className="text-sm lg:text-xl" />
              <div className="text-[10px] lg:text-sm font-bold">Login</div>
            </div>
          </Link>
          <Link to="/createaccount">
            <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
              <FaUserPlus className="text-sm lg:text-xl" />
              <div className="text-[10px] lg:text-sm font-bold">Sign Up</div>
            </div>
          </Link>

          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <FiDollarSign className="text-sm lg:text-xl" />
            <div className="text-[10px] lg:text-sm font-bold">USD</div>
          </div>

          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <FaGlobe className="text-sm lg:text-xl" />
            <div className="text-[10px] lg:text-sm font-bold">En</div>
          </div>
          <div className="relative flex items-center  space-x-1 md:space-x-1 cursor-pointer group">
            <FaShoppingCart className="text-sm md:text-lg" />
            <p className="text-sm md:text-xl font-medium">$0.00</p>
            <RiArrowDownSFill className="text-lg" />
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Top;
