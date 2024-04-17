import { IoMdMenu } from "react-icons/io";
import { BiDownArrow } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1">
          <details className="dropdown">
            <summary className="bg-[#00b106] flex items-center justify-between lg:text-lg cursor-pointer font-semibold lg:gap-[50px] lg:px-12 text-white px-4 lg:w-full w-[290px] py-3 lg:py-3 lg:rounded-full">
              <IoMdMenu size={22} /> All Categories <BiDownArrow size={21} />
            </summary>
            <ul className="p-2 shadow menu dropdown-content space-y-2 z-[1] text-[#767676] w-[300px] lg:w-[350px] text-[17px] font-Source3 rounded-box bg-[#f8f9fa]">
              <li className="border-b">
                <a className="p-3">Home</a>
              </li>
              <li className="border-b">
                <a className="p-3 flex justify-between items-center">
                  Fruits & Vegetables{" "}
                  <MdKeyboardArrowRight size={25} color="#999999" />
                </a>
              </li>
              <li className="border-b">
                <a className="p-3 flex justify-between items-center">
                  Cooking <MdKeyboardArrowRight size={25} color="#999999" />
                </a>
              </li>
              <li className="border-b">
                <a className="p-3 flex justify-between items-center">
                  Meat & Fish <MdKeyboardArrowRight size={25} color="#999999" />
                </a>
              </li>
              <li className="border-b">
                <a className="p-3">Cooking</a>
              </li>
              <li className="border-b">
                <a className="p-3">Baking</a>
              </li>
              <li className="border-b">
                <a className="p-3"> Dairy</a>
              </li>
              <li className="border-b">
                <a className="p-3">Candy & Chocolate</a>
              </li>
              <li className="border-b">
                <a className="p-3">Frozen & Canned</a>
              </li>
              <li className="border-b">
                <a className="p-3">Bread & Bakery</a>
              </li>
              <li>
                <a className="p-3">Snacks</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="col-span-3 hidden lg:flex">
          <div className="bg-[#f8f9fa] rounded-full p-4">
            <ul className="flex items-center font-Source3 px-2 font-semibold text-sm gap-8">
              <li className="flex items-center gap-2 relative cursor-pointer">
                Home Page <MdKeyboardArrowDown color="#999999" size={20} />
                <ul className="bg-white absolute hidden top-[30px]">
                  <li>Home style 01</li>
                  <li>Home style 02</li>
                  <li>Home style 03</li>
                </ul>
              </li>
              <li className="cursor-pointer">About</li>
              <li className="flex items-center cursor-pointer gap-2">
                Shop Page <MdKeyboardArrowDown color="#999999" size={20} />
              </li>
              <li className="flex items-center cursor-pointer gap-2">
                Pages <MdKeyboardArrowDown color="#999999" size={20} />
              </li>
              <li className="flex items-center cursor-pointer gap-2">
                Blog <MdKeyboardArrowDown color="#999999" size={20} />
              </li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
