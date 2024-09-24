import { Link } from "react-router-dom";

const Account = ({ logout }) => {
  return (
    <div className="z-106  absolute top-2 md:top-2  lg:top-8 xl:top-10   max-w-[200px] rounded-md border border-white bg-[#002c38] text-white p-3 hidden group-hover:block ">
      <div className="text-md font-bold py-3 px-1">Profile</div>
      <div className="text-md font-bold py-3 px-1" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Account;
