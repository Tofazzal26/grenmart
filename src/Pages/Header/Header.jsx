import logo from "../../../public/icon/logo.png";
import { LuUser2 } from "react-icons/lu";
import { RxLoop } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Header = () => {
  return (
    <div className="my-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden relative lg:flex">
          <label className="input input-bordered rounded-full flex items-center">
            <input
              type="text"
              className="grow w-[400px]"
              placeholder="Search..."
            />
            <button className=" px-12 py-3 rounded-full absolute right-0 font-semibold bg-[#00b106] text-white">
              Search
            </button>
          </label>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-6">
            <LuUser2 size={23} color="#999999" />
            <RxLoop size={23} color="#999999" />
            <IoMdHeartEmpty size={23} color="#999999" />
            <HiOutlineShoppingBag size={23} color="#999999" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
