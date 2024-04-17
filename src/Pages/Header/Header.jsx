import logo from "../../../public/icon/logo.png";
import { LuUser2 } from "react-icons/lu";
import { RxLoop } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Header = () => {
  return (
    <div className="my-4">
      <div className="navbar flex flex-col lg:flex-row justify-center lg:gap-0 gap-4 items-center bg-base-100">
        <div className="navbar-start lg:order-1 order-3">
          <div>
            <div className="flex justify-center items-center">
              <div>
                <a className="text-xl">
                  <img className="lg:w-full w-[300px]" src={logo} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center relative lg:flex lg:order-2 order-2">
          <label className="input input-bordered rounded-full flex items-center">
            <input
              type="text"
              className="grow w-[250px] lg:w-[400px]"
              placeholder="Search..."
            />
            <button className=" lg:px-12 px-8 py-[10px] lg:py-3 rounded-full absolute right-0 font-semibold bg-[#00b106] text-white">
              Search
            </button>
          </label>
        </div>
        <div className="navbar-end order-1 lg:order-3">
          <div className="flex items-center gap-6">
            <LuUser2 className="cursor-pointer" size={23} color="#999999" />
            <RxLoop className="cursor-pointer" size={23} color="#999999" />
            <div className="relative">
              <IoMdHeartEmpty
                className="cursor-pointer"
                size={23}
                color="#999999"
              />
              <div className="bg-[#00b106] rounded-full flex absolute right-[-15px] top-[-18px] text-white font-semibold">
                <span className="text-[12px] px-2 py-1">0</span>
              </div>
            </div>
            <div>
              <div className="relative">
                <HiOutlineShoppingBag
                  className="cursor-pointer"
                  size={23}
                  color="#00b106"
                />
                <div className="bg-[#00b106] rounded-full flex absolute right-[-15px] top-[-18px] text-white font-semibold">
                  <span className="text-[12px] px-2 py-1">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
