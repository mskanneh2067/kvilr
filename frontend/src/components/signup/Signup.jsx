import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../features/auth/authsSlice";
import { setCredentials } from "../../features/users/userSlice";
import Loader from "../../components/loader/Loader";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import Footer from "../../components/footer/Footer";
const Signup = () => {
  const [viewpwd, setViewPWD] = useState(false);
  const [viewcpwd, setViewCPWD] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState("Yes");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      try {
        const res = await register({
          fullName,
          email,
          password,
          confirmPassword,
          acceptPrivacyPolicy,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        console.log(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <div className="w-full h-full  bg-[#f5f3f0]">
        <div className="w-full h-32 flex items-center justify-center bg-[#002c38]">
          <Link to="/" className="my-1">
            <div className="flex  items-center cursor-pointer ">
              <img src={logo} alt="" className="w-16 lg:w-20" />
            </div>
          </Link>
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full p-5 flex flex-col items-center min-w-[344px] max-w-[344px] mx-auto -mt-7 bg-white rounded-sm border shadow-md"
        >
          <div className="w-full my-1">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="off"
              placeholder="Name"
              required
              className=" w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
            />
          </div>
          <div className="w-full my-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Email"
              required
              className=" w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
            />
          </div>

          <div className="relative w-full my-1">
            <input
              type={viewpwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              placeholder="Password"
              required
              className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
            />
            {viewpwd ? (
              <FaEye
                className="absolute top-3 right-2 cursor-pointer"
                onClick={() => setViewPWD(false)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-3 right-2 cursor-pointer"
                onClick={() => setViewPWD(true)}
              />
            )}
          </div>
          <div className="relative w-full my-1">
            <input
              type={viewcpwd ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
              placeholder="Confirm Password"
              required
              className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
            />
            {viewcpwd ? (
              <FaEye
                className="absolute top-3 right-2 cursor-pointer"
                onClick={() => setViewCPWD(false)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-3 right-2 cursor-pointer"
                onClick={() => setViewCPWD(true)}
              />
            )}
          </div>

          <div className="p-2 mb-3 border-b border-gray-400 ">
            <input
              type="checkbox"
              name="privacy"
              value={acceptPrivacyPolicy}
              onChange={(e) => setAcceptPrivacyPolicy(e.target.value)}
              required
            />{" "}
            <label
              htmlFor="privacy"
              className="text-black font-semibold text-sm"
            >
              By clicking here, I state that I have read,understood,and agreed
              to the terms,conditions, and privacy policy of Kanstars Vision.
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-md p-2 mb-3  bg-[#002c38] text-white font-bold"
          >
            Sign Up
          </button>
          <div className="w-full text-center">
            <p className="my-1 text-black font-semibold text-sm">
              Already have an account?
            </p>
            <Link to="/login">
              <p className=" rounded-md p-2 mb-3  bg-[#00cd00] text-white font-bold">
                Login
              </p>
            </Link>
          </div>
        </form>
        {isLoading && <Loader />}
      </div>
      <Footer />
    </>
  );
};

export default Signup;
